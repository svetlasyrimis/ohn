import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCardBack = (props) => {
  
  let creator = props.project.collaborators.filter(collaborator => collaborator.isOwner)[0].user.username
  let collaborators = props.project.collaborators.map(collaborator => collaborator.user.username).join(', ').split(' ')

  return (
    <div className="project-card back-card">
      <p><strong>Date added:</strong> {(new Date(props.date).toDateString())} </p>
      <p><strong>Project:</strong> {props.project.name}</p>
      <p><strong>Creator:</strong> {creator}</p>
      <p><strong>Collaborators:</strong> {collaborators} </p>


      <FontAwesomeIcon
        style={{ color: "#2F84CF" }}
        className="icon"
        icon="arrow-circle-left"
        size="lg"
        title="Back"
        onClick={props.handleClick}
        />
      
    </div>
  )
}

export default ProjectCardBack