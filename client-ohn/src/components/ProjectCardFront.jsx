import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const ProjectCardFront = (props) => {
  let creator = props.project.collaborators.filter(collaborator => collaborator.isOwner)[0].user.username

  console.log(creator)
  let isCollaborator = props.project.collaborators.filter(collaborator => collaborator.user.username === props.currentUser.username).length > 0

  let isOwner = props.currentUser.username === creator
  let isOwnerOrCollaborator = isOwner || isCollaborator

  return (

    <div className="project-card">

      <p>Project name : {props.project.name}</p>
      <p>Description: {props.project.description}</p>
      <p>Creator: {creator} </p>

      <FontAwesomeIcon
        onClick={props.handleClick}
        className="icon"
        icon="users"
        size="lg"
        style={{ color: "#55989A" }} />
      {/* <button onClick={props.handleClick}>Ohners</button> */}
      

      {isOwner && <>
        {/* <button
          name={props.project.id}
          onClick={(e) => {
            props.showAlertBeforeDelete();
            props.updateProjectToBeDeleted(props.project.id);
          }}>Delete project</button> */}
        <FontAwesomeIcon
          icon="trash-alt"
          className="trash"
          size="lg"
          style={{ color: "red" }} onClick={(e) => {
            props.showAlertBeforeDelete();
            props.updateProjectToBeDeleted(props.project.id);
          }} />
        
        <Link to={`/projects/${parseInt(props.project.id)}`}><FontAwesomeIcon
        style={{ color: "black" }}
        className="icon"
        icon="info-circle"
        size="lg"
        /></Link>
      </>}

      {(!isOwnerOrCollaborator && !props.isAdded) &&
        <button
          className="btn-outline-dark"
          name={props.project.id}
          onClick={(e) => {
            e.preventDefault();
            props.handleAdd(e);
            props.becomeCollaborator(e)
          }}>Join Project</button>}

      {props.isAdded && <p className="green">Joined <span>&#10004;</span> </p>}

      {!isOwner && isCollaborator && <><Link to={`/projects/${parseInt(props.project.id)}`}>See More</Link><button
        className="btn-outline-dark"
        name={props.project.id}
        onClick={(e) => {
          e.preventDefault();
          props.removeCollaborator(props.project.id)
        }}>Leave Project</button></>}

     

    </div>
  )
}

export default ProjectCardFront



