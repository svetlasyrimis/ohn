import React from 'react';


function SkillList(props) {
  return (
    <>
      {props.skills && props.skills.map(skill =>
        <div key={skill.id}>
          <h2>{skill.name}</h2>
          <button name={skill.id} onClick={props.handleDelete}>Delete a skill</button>
          {/* <Link to={`/zoos/${parseInt(zoo.id)}`}>see more</Link> */}
        </div>)}
    </>
  )
}
 export default SkillList;