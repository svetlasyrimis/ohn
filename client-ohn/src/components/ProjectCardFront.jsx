import React from 'react';
import { Link } from 'react-router-dom';

//have to pass it inside in the map of project list
const ProjectCardFront = (props) => {

  let creator = props.project.collaborators.filter(collaborator => collaborator.isOwner)[0].user.username

  let isCollaborator = props.project.collaborators.filter(collaborator => collaborator.user.username === props.currentUser.username).length > 0

  // console.log("isCollaborator=", isCollaborator)

  let isOwner = props.currentUser.username === creator
  // console.log("isOwner=", isOwner)

  let isOwnerOrCollaborator = isOwner || isCollaborator

  // console.log("isOwnerOrCollaborator=", isOwnerOrCollaborator)

  return (
    <div className="project-card">

      <p>Project name : {props.project.name}</p>
      <p>Description {props.project.description}</p>

      {/* <button name={props.project.id} onClick={props.handleDelete}>Delete a project</button> */}

      <button onClick={props.handleClick}>OHNers</button>
      <br />
      {isOwner && <button name={props.project.id} onClick={(e) => { props.deleteThisProject(e);props.handleDelete() }}>Delete project</button>}
      {(!isOwnerOrCollaborator && !props.isAdded) && <button className="btn-outline-dark" name={props.project.id} onClick={(e) => { e.preventDefault(); props.handleAdd(e); props.becomeCollaborator(e) }}>Join Project</button>}
      {props.isAdded && <p className="bold" name={props.project.id}>Added</p>}
      <Link to={`/projects/${parseInt(props.project.id)}`}>See More</Link>
    </div>
  )
}

export default ProjectCardFront



