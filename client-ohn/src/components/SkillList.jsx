import React from 'react';
import FontAwesome from 'react-fontawesome'
import bulletSkill from '../assets/bullet-skill.png'



function SkillList(props) {
  return (
    <>
      {props.skills && props.skills.map(skill => <div className="skills-interests-items" key={skill.id}>
        <img src={bulletSkill} className="bullet-point-icon"></img>
        <p>{skill.name}</p>
        <button onClick={props.handleDelete} name={skill.id}>Delete</button>

        <button onClick={props.handleDelete} name={skill.id} className="button"><i className="fa fa-trash"></i></button>
      </div>
      )}
    </>
  )
}

export default SkillList;


{/* <FontAwesome
          name='trash'
          size='2x'
          color="blue"
          className="garbage icon"
          // spin
          style={{ backgroundColor: "red" }}
        /> */}