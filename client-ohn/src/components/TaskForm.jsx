import React from 'react'
import { createTask, getTasks } from '../services/task';

export default class TaskForm extends React.Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
      taskName: '',
      userId: '',
      isEdit: null,
      project_id: this.props.projectId,
      
    }
  }

  // async componentDidMount() {
  //   const tasks = await getTasks(this.props.projectId)
  //   this.setState({
  //     tasks: tasks
  //   })

  //   console.log(this.state.tasks)
  // }
  handleCreateTask = async (projectId,data) => {
    const task = await createTask(projectId,data);

    console.log(task);
    // this.setState(prevState => ({
    //   tasks: [task, ...prevState.tasks],

    // }))
  }
  handleTaskSubmit = async (ev) => {
    ev.preventDefault();
    const resp = await this.handleCreateTask(this.props.projectId, this.state.name)
    debugger;
    console.log(resp)
    this.setState({
      name: ''
    })
  }
  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        <p>Hey</p>
        <form onSubmit={this.handleTaskSubmit}>
        <input
            type='text'
            value={this.state.taskName}
            onChange={this.handleChange}
            name="taskName"
          ></input>
          <input type="submit" value="Add a task"></input>
        </form>
      </div>
    )
  }
}
