import React from 'react';
import { Link } from 'react-router-dom';

//have to pass it inside in the map of project list
const ProjectCardBack = (props) => {
  // console.log(props)
  let creator = props.project.collaborators.filter(collaborator => collaborator.isOwner)[0].user.username
  let collaborators = props.project.collaborators.map(collaborator => collaborator.user.username).join(', ').split(' ')

  return (
    <div className="project-card">
      <p>Date added: {(new Date(props.date).toDateString())} </p>
      <p>Project: {props.project.name}</p>
      <p>Creator: {creator}</p>
      <p>Collaborators : {collaborators} </p>



      <button onClick={props.handleClick}>Project brief</button>

      <Link to={`/projects/${parseInt(props.project.id)}`}>See More</Link>
    </div>
  )
}

export default ProjectCardBack