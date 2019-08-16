import React from 'react';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import ProjectCardFront from './ProjectCardFront'
import ProjectFlippingCard from './ProjectFlippingCard';

const ProjectList = props => {
  console.log(props)
  return (
    
    <>
      {props.projects && props.projects.map(project =>

        (<div key={project.id} className="project-list">
          {/* <ProjectCardFront handleDelete={props.handleDelete} project={project} /> */}
          <ProjectFlippingCard date={project.created_at} project={project} handleDelete={props.handleDelete}></ProjectFlippingCard>
        </div>
        ))}

    </>
  )
}
export default ProjectList;