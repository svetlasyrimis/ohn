import React from 'react';
// import FontAwesome from 'react-fontawesome';
import bulletSkill from '../assets/bullet-skill.png'

const  InterestList = props =>  {
  return (
    <>
      {props.interests && props.interests.map(interest => <div className="skills-interests-items" key={interest.id}>
      <img src={bulletSkill} alt="bullet-point" className="bullet-point-icon"></img>
            <p>Interest :{interest.name}</p>
            <button onClick={props.handleDelete} name={interest.id}>Delete</button>
            
       <button onClick={props.handleDelete} name={interest.id} className="button"><i className="fa fa-trash"></i></button>
       {/* <FontAwesome
              name='trash'
              size='2x'
              color="blue"
              className="garbage icon"
              // spin
              style={{ backgroundColor: "red" }}
            /> */}
          </div>
          )} 
    
    </>
  )
}
 export default InterestList;