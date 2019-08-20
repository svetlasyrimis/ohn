import React from 'react'
import ReactCardFlip from 'react-card-flip';
import ProjectCardFront from './ProjectCardFront';
import ProjectCardBack from './ProjectCardBack'

//This component contains the flipping card(front and back),statefult component in order to tagret the flipping state of the card and track if a project has been added or removed.


class ProjectFlippingCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      isAdded: false,
      isRemoved: false,
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
    this.setState(prevState => ({
      isAdded: !prevState.isAdded,
      
    }));
  }

  handleRemove = () => {
    this.setState(prevState => ({
      isRemoved: !prevState.isRemoved
    }));
  }


  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" infinite={true} flipSpeedFrontToBack={0.8} containerStyle={{width: "fit-content"}}>
        <ProjectCardFront
          handleClick={this.handleClick}
          showAlertBeforeDelete={this.props.showAlertBeforeDelete}
          project={this.state.project}
          currentUser={this.props.currentUser}
          becomeCollaborator={this.props.becomeCollaborator}
          handleAdd={this.handleAdd}
          isAdded={this.state.isAdded}
          updateProjectToBeDeleted={this.props.updateProjectToBeDeleted}
          removeCollaborator={this.props.removeCollaborator}
          handleRemove={this.handleRemove}
          key="front"></ProjectCardFront>

        <ProjectCardBack
          key="back"
          date={this.props.date}
          handleClick={this.handleClick}
          project={this.state.project}
          handleAdd={this.handleAdd}
          currentUser={this.props.currentUser}
          becomeCollaborator={this.props.becomeCollaborator}>
          </ProjectCardBack>

      </ReactCardFlip>
    )
  }
}

export default ProjectFlippingCard
