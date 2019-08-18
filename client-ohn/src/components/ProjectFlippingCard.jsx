import React from 'react'
import ReactCardFlip from 'react-card-flip';
import ProjectCardFront from './ProjectCardFront';
import ProjectCardBack from './ProjectCardBack'

//This component contains the modal with the project form, project List that renders all the projects and Link to close it
class ProjectFlippingCard extends React.Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
      isFlipped: false,
      isAdded:false,
      project: this.props.project,
      collabFor: this.props.collabFor,
      collaborators: this.props.collaborators,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }
  handleAdd = () => {
    // ev.preventDefault();
    this.setState(prevState => ({
      isAdded: !prevState.isAdded
    }));
  }

  // handleAddCollaboratorSubmit = (ev) => {
  //   ev.preventDefault();
  //   this.handleAdd();
  //   this.props.becomeCollaborator()
  // }
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

        <ProjectCardFront handleClick={this.handleClick} showAlertBeforeDelete={this.props.showAlertBeforeDelete} project={this.state.project} currentUser={this.props.currentUser} becomeCollaborator={this.props.becomeCollaborator} handleAdd={this.handleAdd} isAdded={this.state.isAdded} updateProjectToBeDeleted={this.props.updateProjectToBeDeleted}key="front"></ProjectCardFront>
         
        <ProjectCardBack key="back" date={this.props.date} handleClick={this.handleClick} project={this.state.project} handleAdd={this.handleAdd} currentUser={this.props.currentUser} becomeCollaborator={this.props.becomeCollaborator}></ProjectCardBack>

      </ReactCardFlip>
    )
  }
}

export default ProjectFlippingCard
