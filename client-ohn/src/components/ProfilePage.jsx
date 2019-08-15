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
      <div className="user-info">
        <p>Your Profile Page</p>
        <p className="bold">Username : {props.user.username}</p>
        <p className="bold">Email : {props.user.email}</p>
        <hr />


      </div>
      <div className="skills-and-interests">
        <div className="flex-column user-stuff">
          <p className="bold">Skills</p>
          <hr/>
          <ModalSkill currentUser={props.user} handleSubmit={props.handleSubmit} />
          <SkillList skills={props.skills} handleDelete={props.handleDelete} />
        </div>

        {/* <hr className="vertical-hr"/> */}


        <div className="flex-column user-stuff">
          <p className="bold">Interests</p>
          <hr/>
          <ModalInterest currentUser={props.user} handleSubmit={props.handleSubmitInt} />
          <InterestList interests={props.interests} handleDelete={props.handleDeleteInt} />
        </div>
      </div>
    </div>
  )
}


