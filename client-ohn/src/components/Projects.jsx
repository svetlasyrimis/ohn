import React from 'react'
import ProjectList from './ProjectList';
import ModalProject from './ModalProject';
import SweetAlert from 'react-bootstrap-sweetalert';




//This component contains the modal with the project form, project List that renders all the projects and Link to close it
class Projects extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      projectData: {
        name: '',
        description: ''
      },
      shouldShowAlert:false,
      isFlipped: false,
      projectToBeDeleted: '',
      deleteMessage: "Are you sure you want to delete this project? This cannot be undone."
    }
  }

  handleClick = (e) => {
    e.preventDefault();
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
  }

  showAlert = (shouldShow) => {
    this.setState({
      shouldShowAlert: shouldShow,
    });
  }
  
  alertOnConfirm = () => { 
    if (this.state.projectToBeDeleted !== "") { 
      this.props.deleteThisProject(this.state.projectToBeDeleted);
      this.showAlert(false);
      this.updateProjectToBeDeleted("");
    } 
  }

  updateProjectToBeDeleted = (id) => { 
    this.setState({
      projectToBeDeleted: id,
    });
  }

  render() {
    return (
      <div className="project-board">
        {this.state.shouldShowAlert && <SweetAlert
          warning
          showCloseButton={true}
          showConfirm={true}
          showCancel={true}
          confirmBtnText="Yes"
          cancelBtnText="Cancel"
          confirmBtnBsStyle="danger"
          cancelBtnBsStyle="info"
          title="Delete project"
          onCancel={(e) => { this.showAlert(false) }}
          onConfirm={this.alertOnConfirm}
        >{this.state.deleteMessage}
        </SweetAlert>}

        <ModalProject currentUser={this.props.currentUser} handleSubmit={this.props.handleSubmit} />
        
         <ProjectList 
          currentUser={this.props.currentUser}
          projects={this.props.projects}
          showAlertBeforeDelete={(e) => { this.showAlert(true) }}
          handleClick={this.handleClick}
          isFlipped={this.state.isFlipped}
          collabFor={this.props.collabFor}
          updateProjectToBeDeleted={this.updateProjectToBeDeleted}
          removeCollaborator={this.props.removeCollaborator}
          />
          
      </div>
    )
  }
}

export default Projects
