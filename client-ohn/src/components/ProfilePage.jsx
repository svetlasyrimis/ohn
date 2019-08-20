import React from 'react'

import ModalSkill from './ModalSkill';
import ModalInterest from './ModalInterest'
import SkillList from './SkillList';
import InterestList from './InterestList'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
// var FontAwesome = require('react-fontawesome');
// import FontAwesome from 'react-fontawesome'


export default function ProfilePage(props) {
  return (
    <div>
      <div className="user-info" >
        
        <p className="normal">Username: <strong>{props.user.username}</strong></p>
        <p className="normal">Email: <strong> {props.user.email}</strong></p>
        <hr />


      </div>
      
        <div className="flex-column user-stuff">
          <p className="bold">Skills</p>
          <hr/>
          <ModalSkill currentUser={props.user} handleSubmit={props.handleSubmit} />
          <SkillList skills={props.skills} handleDelete={props.handleDelete} />
        </div>

        <hr/>


        <div className="flex-column user-stuff">
          <p className="bold">Interests</p>
          <hr/>
          <ModalInterest currentUser={props.user} handleSubmit={props.handleSubmitInt} />
          <InterestList interests={props.interests} handleDelete={props.handleDeleteInt} />
        </div>
      
    </div>
  )
}


