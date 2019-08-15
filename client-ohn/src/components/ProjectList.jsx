import React from 'react';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import ProjectCardFront from './ProjectCardFront'

const ProjectList = props => {

  return (
    <>
      {props.projects && props.projects.map(project =>

        (<div key={project.id}>
          {/* <ProjectCardFront handleDelete={props.handleDelete} project={project} /> */}

          <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">

            <ProjectCardFront handleClick={props.handleClick} handleDelete={props.handleDelete} project={project} key="front"></ProjectCardFront>

            <ProjectCardFront key="back" handleClick={props.handleClick} handleDelete={props.handleDelete} project={project}></ProjectCardFront>

          </ReactCardFlip>
        </div>
        ))}

    </>
  )
}
export default ProjectList;