import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function SkillList(props) {
  return (
    <>
      {props.skills && props.skills.map(skill =>
        <div className="skills-interests-items" key={skill.id}>
          {/* <FontAwesomeIcon
            icon="edit"
            style={{ color: "#55989A" }}
            size="lg" /> */}
          
          <FontAwesomeIcon
            className="list-item"
            icon="circle"
            style={{ color: "#55989A" }}
            size="sm" />
          
          <p className="list-item normal">{skill.name}</p>

          <FontAwesomeIcon
            onClick={(e) => {
              e.preventDefault();
              props.handleDelete(skill.id)
            }}
            className="list-item spin"
            
            icon="trash-alt"
            size="lg"
            style={{ color: "red" }} />

        </div>
      )}
    </>
  )
}

export default SkillList;


