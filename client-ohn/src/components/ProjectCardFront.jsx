import React from 'react';
import { Link } from 'react-router-dom';

//have to pass it inside in the map of project list
const ProjectCardFront = (props) => {
  return (
    <div>
      {/* <p>Project id : {props.project.id}</p> */}
      <p>Project name : {props.project.name}</p>
      <p>Description {props.project.description}</p>

      <p>Collaborators : {props.project.collaborators.map(collaborator => { { return collaborator.user.username } }).join(',').split(' ')} </p>

      <button name={props.project.id} onClick={props.handleDelete}>Delete a project</button>

      <button onClick={props.handleClick}>View Details</button>

      {/* <Link to={`/projects/${parseInt(project.id)}`}>See More</Link> */}
    </div>
  )
}

export default ProjectCardFront

