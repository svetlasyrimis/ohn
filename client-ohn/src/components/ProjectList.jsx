import React from 'react';

import ProjectFlippingCard from './ProjectFlippingCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const ProjectList = props => {


  if (props.projects.length === 0 && props.collabFor.length === 0) {
    return <p>Your list is empty</p>
  }


  return (
    <>
      
      <p>Your Projects</p>
      <hr />
      <div className="project-list">
        {props.projects && props.projects.map(project => (
          <div key={project.id} className="project-list">
            <ProjectFlippingCard
              date={project.created_at}
              project={project}
              showAlertBeforeDelete={props.showAlertBeforeDelete} updateProjectToBeDeleted={props.updateProjectToBeDeleted} currentUser={props.currentUser}
            ></ProjectFlippingCard>
          </div>
        ))}
      </div>
      <br />


      {props.collabFor.length ?
        <>
          
          <p>Projects you've joined</p>
          <hr />
          <div className="project-list">
            {props.collabFor.map(project => (
              <div key={project.id} >
                <ProjectFlippingCard
                  date={project.created_at}
                  currentUser={props.currentUser}
                  project={project}
                  removeCollaborator={props.removeCollaborator}
                  collaborators={project.collaborators}></ProjectFlippingCard>
              </div>
            ))}
          </div>
        </>
        :
        <>
          <p>You haven't joined any projects yet.</p><Link to='/search'><Button size="lg" variant="outline-warning" className="call-for-action">Join a Project</Button></Link>
        </>}

    </>
  )
}
export default ProjectList;