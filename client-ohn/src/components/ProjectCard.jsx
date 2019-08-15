import React from 'react';
import { showProject } from '../services/project'
import { createTask, destroyTask, updateTask } from '../services/task'
import TaskList from './TaskList'


export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      collaborators: [],
      tasks: [],
      taskName: {
        name: ''
      },
      idEdit: null
    }
  }

  async componentDidMount() {
    // const tasks = await getTasks(this.props.id)
    this.setState({
      id: this.props.id,
      // tasks: tasks
    })

    const res = await showProject(this.props.id)
    // debugger
    console.log(res);

    this.setState({
      name: res.name,
      description: res.description,
      collaborators: res.collaborators.map(collaborator => collaborator.user.username).join(',').split(' '),
      creator: res.collaborators.filter(collaborator => collaborator.isOwner)[0].user.username,
      tasks: res.tasks
    })

    
  }

  handleCreateTask = async (projectId, data) => {
    const task = await createTask(projectId, data);

    console.log(task);
    this.setState(prevState => ({
      tasks: [task, ...prevState.tasks],

    }))
  }
  handleTaskSubmit = async (ev) => {
    ev.preventDefault();
    const resp = await this.handleCreateTask(this.props.id, this.state.taskName)
    // debugger;
    console.log(resp.data)
    this.setState({
      taskName: {
        name: ''
      }
    })
  }
  handleChange = ev => {
    const { target: { name, value } } = ev;
    this.setState(prevState => ({
      taskName: {
        ...prevState.taskName,
        [name]: value,
      }
    }));
  }
  edit = (taskId) => {
    // const taskId = ev.target.name
    this.setState(prevState => {
      const { name } = prevState.tasks.find(task => task.id === taskId);
      return {
        taskName:
          { name },
      };
    });
  }

  handleUpdate = (ev) => {
    const taskId = ev.target.name
    console.log(taskId)
    console.log(this.state.tasks)
    const currentTask = this.state.tasks.find(task => task.id === parseInt(taskId))
    console.log(currentTask.name)

    this.setState({
      isEdit: true,
      taskName: {
        name: currentTask.name,
      },
      editingId: currentTask.id
    });
  }
  // update = async () => {



  handleUpdateSubmit = async (ev) => {
    ev.preventDefault();
    const data = this.state.taskName
    const resp = await updateTask(this.props.id, this.state.editingId, data)

    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => task.id === resp.id ? resp : task)
    }))


  }
  handleDeleteTask = async (ev) => {
    const taskId = ev.target.name
    console.log(ev.target.name)
    await destroyTask(this.props.id, taskId);
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task =>
        task.id !== parseInt(taskId)
      )
    }))

  }

  render() {
    return (

      <div>
        <h1>Project {this.state.id}</h1>
        <p>Name: {this.state.name}</p>
        <p>Description {this.state.description}</p>
        <p>Creator: {this.state.creator}</p>
        <p>Collaborators : {this.state.collaborators}</p>
        {/* <TaskForm projectId={this.state.id} tasks={this.state.tasks}/> */}
        <div>
          <p>Hey</p>
          {this.state.isEdit &&
            <form onSubmit={this.handleUpdateSubmit}>
              <input
                type='text'
                value={this.state.taskName.name}
                onChange={this.handleChange}
                name="name"
              ></input>
              <input type="submit" value="Update"></input>
            </form>}
          {!this.state.isEdit &&
            <form onSubmit={this.handleTaskSubmit}>
              <input
                type='text'
                value={this.state.taskName.name}
                onChange={this.handleChange}
                name="name"
              ></input>
              <input type="submit" value="Add a task"></input>
            </form>}
        </div>
        <TaskList projectId={this.props.id} tasks={this.state.tasks} handleDelete={this.handleDeleteTask} handleUpdate={this.handleUpdate} edit={this.edit} />
      </div>

    )
  }
}
