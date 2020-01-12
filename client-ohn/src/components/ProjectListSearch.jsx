import React from 'react';
import ProjectFlippingCard from './ProjectFlippingCard';

const ProjectListSearch = props => {
  
  return (

    <div className="flex-column project-list results">
      {props.projects && props.projects.map(project =>

        (<div key={project.id} className="project-list">

          <ProjectFlippingCard
            date={project.created_at}
            project={project}
            handleDelete={props.handleDelete}
            currentUser={props.currentUser}
            becomeCollaborator={props.becomeCollaborator}
            collabFor={props.collabFor}
          ></ProjectFlippingCard>
          {/* <Link to></Link> */}


        </div>
        ))}

    </div>
  )
}
export default ProjectListSearch;