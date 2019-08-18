import React from 'react';

import ProjectFlippingCard from './ProjectFlippingCard';

const ProjectList = props => {
  
  
  if (props.projects.length === 0 && props.collabFor.length === 0) {
    return <p>Your list is empty</p>
  }
  return (
    
    <>
      <p>Your Projects</p>
      {props.projects && props.projects.map(project =>
        
        (<div key={project.id} className="project-list">
          
          <ProjectFlippingCard date={project.created_at} project={project} showAlertBeforeDelete={props.showAlertBeforeDelete} updateProjectToBeDeleted={props.updateProjectToBeDeleted}currentUser={props.currentUser}></ProjectFlippingCard>
        </div>
        ))}
      <hr />
      <p>Projects you've joined</p>
      <div className="project-list">
      {props.collabFor && props.collabFor.map(project => (<div key={project.id} >
        
        <ProjectFlippingCard date={project.created_at} currentUser={props.currentUser} project={project} collaborators={project.collaborators}></ProjectFlippingCard>
      </div>
      ))}
    </div>
    </>
  )
}
export default ProjectList;