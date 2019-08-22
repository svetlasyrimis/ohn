import React from 'react'


//projects contains the form to submit the project
class ProjectOnlyForm extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      projectData: {
        name: '',
        description: ''
      },
      
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
    this.props.handleClose()
     
  }

  
  render() {
    return (
      <>
        <form className="flex-column" onSubmit={this.handleProjectSubmit} >
          <label htmlFor="name">Title </label>
          <textarea
            type='text'
            value={this.state.projectData.name}
            onChange={this.handleChange}
            name="name"
            rows="1" cols="50"
          ></textarea>
          <label htmlFor="description">Description</label>
          <textarea
            type='text'
            value={this.state.projectData.description}
            onChange={this.handleChange}
            name="description"
            // className="input-description"
            rows="4" cols="50"
            
          ></textarea>
          <input type="submit" value="Create a project" className="btn-outline-dark"/>
        </form>
      </>
    )
  }
}

export default ProjectOnlyForm
