import React from 'react'
import ProjectList from './ProjectList';
import { Link } from 'react-router-dom';
import ModalProject from './ModalProject';
import ReactCardFlip from 'react-card-flip';
import ProjectCardFront from './ProjectCardFront';
import ProjectCardBack from './ProjectCardBack'

//This component contains the modal with the project form, project List that renders all the projects and Link to close it
class ProjectFlippingCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      project: this.props.project
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

        <ProjectCardFront handleClick={this.handleClick} handleDelete={this.props.handleDelete} project={this.state.project} key="front"></ProjectCardFront>

        <ProjectCardBack key="back" date={this.props.date} handleClick={this.handleClick}  project={this.state.project}></ProjectCardBack>

      </ReactCardFlip>
    )
  }
}

export default ProjectFlippingCard
