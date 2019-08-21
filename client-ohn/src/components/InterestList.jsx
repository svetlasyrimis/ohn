import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const  InterestList = props =>  {
  return (
    <>
      {props.interests && props.interests.map(interest => <div className="skills-interests-items" key={interest.id}>
        <FontAwesomeIcon
          icon="circle"
          className="list-item"
          style={{ color: "#55989A" }}
          size="sm" />
          <p className="list-item normal">{interest.name}</p>
            
        <FontAwesomeIcon
          onClick={(e) => {
            e.preventDefault();
            props.handleDelete(interest.id)
          }}
          icon="trash-alt"
          size="lg"
          style={{ color: "red" }}
          className="list-item" />
       
       
          </div>
          )} 
    
    </>
  )
}
 export default InterestList;