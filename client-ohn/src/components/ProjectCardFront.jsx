import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const ProjectCardFront = (props) => {
  let creator = props.project.collaborators.filter(collaborator => collaborator.isOwner)[0].user.username

  let isCollaborator = props.project.collaborators.filter(collaborator => collaborator.user.username === props.currentUser.username).length > 0

  let isOwner = props.currentUser.username === creator
  let isOwnerOrCollaborator = isOwner || isCollaborator

  return (

    <div className="project-card">

      <p><strong>Project name:</strong> {props.project.name}</p>
      <p><strong>Description:</strong> {props.project.description}</p>
      <p><strong>Creator:</strong> {creator} </p>

      <FontAwesomeIcon
        onClick={props.handleClick}
        className="icon"
        title="collaborators"
        icon="users"
        size="lg"
        style={{ color: "#55989A" }} />


      {isOwner && <div className="project-buttons">
        
        <FontAwesomeIcon
          icon="trash-alt"
          className="trash icon"
          title="Delete"
          size="lg"
          style={{ color: "red" }} onClick={(e) => {
            props.showAlertBeforeDelete();
            props.updateProjectToBeDeleted(props.project.id);
          }} />

        <Link to={`/projects/${parseInt(props.project.id)}`}>
          <FontAwesomeIcon
          style={{ color: "black" }}
          className="icon"
          icon="info-circle"
          size="lg"
          title="See more"
          />
        </Link>
      </div>}

      {(!isOwnerOrCollaborator && !props.isAdded) &&
        <div className="project-buttons">
        <button
          className="btn-outline-dark join"
          name={props.project.id}
          onClick={(e) => {
            e.preventDefault();
            props.handleAdd(e);
            props.becomeCollaborator(e)
          }}>Join a Project</button></div>
        }
      {props.isAdded && <p className="green"><strong>Joined <span>&#10004;</span></strong> </p>}

      {!isOwner && isCollaborator &&
        <div className="project-buttons">
          <Link to={`/projects/${parseInt(props.project.id)}`}>
            <FontAwesomeIcon
              style={{ color: "black" }}
              className="icon"
              icon="info-circle"
              size="lg"
              title="See more"

            />
          </Link>
          
          <FontAwesomeIcon
            onClick={(e) => {
              e.preventDefault();
              props.removeCollaborator(props.project.id)
            }}
            className="icon running"
            icon="running"
            title="Leave Project"
            size="lg"
            style={{ color: "red" }} />
          </div>}



    </div>
  )
}

export default ProjectCardFront



