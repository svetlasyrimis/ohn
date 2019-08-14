import React from 'react'
import { createProject, getProjects, deleteProject } from '../services/project'
import ProjectList from './ProjectList';
import { Link } from 'react-router-dom';


class Project extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      projectData: {
        name: '',
        description: ''
      },
      projects: this.props.projects
    }
  }

  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      projectData: {
        ...prevState.projectData,
        [name]: value
      }
    }))
  }
  handleProjectSubmit = async (ev) => {
    ev.preventDefault();
    
    this.props.handleSubmit(this.state.projectData);
   
    this.setState({
      projectData: {
        name: '',
        description: ''
      }
    })
    console.log(this.state.projectData)
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleProjectSubmit} >
          <label htmlFor="name">Project </label>
          <input
            type='text'
            value={this.state.projectData.name}
            onChange={this.handleChange}
            name="name"
          ></input>
          <input
            type='text'
            value={this.state.projectData.description}
            onChange={this.handleChange}
            name="description"
            size="35"
            
          ></input>
          <input type="submit" value="Create a project" />

        </form>
        <ProjectList projects={this.props.projects} handleDelete={this.props.handleDelete} />
        <Link to='/dashboard'>Back</Link>
      </div>
    )
  }
}

export default Project
