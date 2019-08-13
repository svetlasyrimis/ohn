import React from 'react';


const  InterestList = props =>  {
  return (
    <>
      {props.interests.map(interest =>
        <div key={interest.id}>
          <h2>{interest.name}</h2>
          <button name={interest.id} onClick={props.handleDelete}>Delete a interest</button>
        </div>)}
    </>
  )
}
 export default InterestList;