import React from 'react';
// import FontAwesome from 'react-fontawesome';
import bulletSkill from '../assets/bullet-skill.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const  InterestList = props =>  {
  return (
    <>
      {props.interests && props.interests.map(interest => <div className="skills-interests-items" key={interest.id}>
      <FontAwesomeIcon icon="circle" style={{ color: "#55989A" }} size="sm" />
            <p className="normal">{interest.name}</p>
            
            <FontAwesomeIcon onClick={(e) => { e.preventDefault();props.handleDelete(interest.id) }} icon="trash-alt" size="lg"  style={{ color: "red" }} className="font-awesome-trash"/>
       
       
          </div>
          )} 
    
    </>
  )
}
 export default InterestList;