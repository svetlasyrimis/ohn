import React from 'react'
import ProjectList from './ProjectList';
import { Link } from 'react-router-dom';
import ModalProject from './ModalProject'

//This component contains the modal with the project form, project List that renders all the projects and Link to close it
class Projects extends React.Component {
  
  constructor(props) {
    console.log(props)
    super(props) 
    this.state = {
      projectData: {
        name: '',
        description: ''
      },
      isFlipped:false,
      // projects: this.props.projects,
      // collabFor: this.props.collabFor
    }
    console.log(this.props.collabFor)
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
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
        
        <ModalProject currentUser={this.props.currentUser} handleSubmit={this.props.handleSubmit} />
        
         <ProjectList 
            currentUser={this.props.currentUser}
            projects={this.props.projects}
            handleDelete={this.props.handleDelete}
            handleClick={this.handleClick}
            isFlipped={this.state.isFlipped}
            collabFor={this.props.collabFor} />
         
        <Link to='/dashboard'>Back</Link>
      </div>
    )
  }
}

export default Projects
