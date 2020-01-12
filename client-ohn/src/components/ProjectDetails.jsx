import React from 'react';
import { showProject } from '../services/project'
import { createTask, destroyTask, updateTask } from '../services/task'
import TaskList from './TaskList'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      collaborators: [],
      tasks: [],
      taskName: {
        name: '',
        isCompleted: false
      },
      isEdit: null
    }
  }

  async componentDidMount() {
    this.setState({
      id: this.props.id,
    })
    const res = await showProject(this.props.id)

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

    this.setState(prevState => ({
      tasks: [task, ...prevState.tasks],

    }))
  }

  handleTaskSubmit = async (ev) => {
    ev.preventDefault();
    await this.handleCreateTask(this.props.id, this.state.taskName)
    
    this.setState({
      taskName: {
        name: '',
        isCompleted: false
      }
    })
  }

  handleChange = ev => {
    const { target: { name, value } } = ev;
    this.setState(prevState => ({
      taskName: {
        ...prevState.taskName,
        [name]: value       
      }
    }));
  }

  handleCheckBoxChange = ev => {
    // const { isCompleted, value } = ev.target;
    this.setState(prevState => ({
      taskName: {
        ...prevState.taskName,
        isCompleted: !prevState.taskName.isCompleted,
      }
    }));
  }
  edit = (taskId) => {
    // const taskId = ev.target.name
    this.setState(prevState => {
      const { name,isCompleted } = prevState.tasks.find(task => task.id === taskId);
      return {
        taskName:
          { name , isCompleted}
      };
    });
  }

  handleUpdate = (ev) => {
    const taskId = ev.target.name
    const currentTask = this.state.tasks.find(task => task.id === parseInt(taskId))

    this.setState({
      isEdit: true,
      taskName: {
        name: currentTask.name,
        isCompleted: currentTask.isCompleted
      },
      editingId: currentTask.id
    });
  }
  



  handleUpdateSubmit = async (ev) => {
    ev.preventDefault();
    const data = this.state.taskName
    const resp = await updateTask(this.props.id, this.state.editingId, data)

    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => task.id === resp.id ? resp : task),
      taskName: {
        name: '',  
      },
      isEdit: false
    }))


  }
  handleDeleteTask = async (ev) => {
    const taskId = ev.target.name
    await destroyTask(this.props.id, taskId);
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task =>
        task.id !== parseInt(taskId)
      )
    }))

  }

  render() {
    return (

      <div className="project-details-container">
        <div className="project-details-items flex-column">
        {/* <h1>Project {this.state.id}</h1> */}
        <p>Name: {this.state.name}</p>
        <p>Description {this.state.description}</p>
        <p>Creator: {this.state.creator}</p>
        <p>Collaborators : {this.state.collaborators}</p>
        {/* <TaskForm projectId={this.state.id} tasks={this.state.tasks}/> */}
        
         
          {this.state.isEdit &&
            <form onSubmit={this.handleUpdateSubmit}>
              <input
                type='text'
                value={this.state.taskName.name}
                onChange={this.handleChange}
                name="name"
            ></input>
            <br />
            {this.state.taskName.isCompleted ? <>
              <FontAwesomeIcon 
                style={{color:"green"}}
                className="task-icon"
                icon="check-circle"
                title="Completed" />{" "}
              Complete
            </> 
              
              :
              <>
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  className="task-icon"
                  icon="times"
                  title="Incomplete"
                />{" "}
              Incomplete
              </>}
            
            <input
              type="checkbox"
              checked={this.state.taskName.isCompleted}
              onChange={this.handleCheckBoxChange}
              name="isCompleted"
            />
              
          
              <input type="submit" value="Update"></input>
            </form>}
          
          
          {!this.state.isEdit &&
            <form onSubmit={this.handleTaskSubmit}>
              <input
                type='text'
                value={this.state.taskName.name}
                onChange={this.handleChange}
                name="name"
                required
            ></input>
            
              <input  type="submit" value="Add a task" ></input>
            </form>}
        
        <TaskList projectId={this.props.id} tasks={this.state.tasks} handleDelete={this.handleDeleteTask} handleUpdate={this.handleUpdate} edit={this.edit} />
          <Link to="/projects">Back to projects</Link>
          </div>
      </div>

    )
  }
}
