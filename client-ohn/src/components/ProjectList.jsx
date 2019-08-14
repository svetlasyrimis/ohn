import React from 'react';
import { Link } from 'react-router-dom';


const ProjectList = props => {
  //debugger
  return (
    <>
      {props.projects && props.projects.map(project =>
        <div key={project.id}>
          <h1>Project id : {project.id}</h1>
          <h2>Project name : {project.name}</h2>
          <p>Description {project.description}</p>
          <p>Collaborators:</p>
          {project.collaborators.map(collaborator => (
            <div key={collaborator.id}>
              <p>{collaborator.user.username}</p>
            </div>
          ))
          }
          <button name={project.id} onClick={props.handleDelete}>Delete a project</button>
          <Link to={`/projects/${parseInt(project.id)}`}>See More</Link>

        </div>)}
    </>
  )
}
export default ProjectList;