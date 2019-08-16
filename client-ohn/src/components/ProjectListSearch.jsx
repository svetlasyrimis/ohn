import React from 'react';
import ProjectFlippingCard from './ProjectFlippingCard';
import Button from 'react-bootstrap/Button'

const ProjectListSearch = props => {
  console.log(props)
  return (
    
    <div className="flex-column project-list">
      {props.projects && props.projects.map(project =>

        (<div key={project.id} className="project-list">
          
          <ProjectFlippingCard date={project.created_at} project={project} handleDelete={props.handleDelete}></ProjectFlippingCard>
          <button className="btn-outline-dark" name={project.id} onClick={props.becomeCollaborator}>Add to your projects</button>
        </div>
        ))}

    </div>
  )
}
export default ProjectListSearch;