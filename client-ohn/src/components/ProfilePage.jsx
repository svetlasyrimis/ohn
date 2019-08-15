import React from 'react'
import FontAwesome from 'react-fontawesome'
import ModalComponent from './ModalComponent';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
// var FontAwesome = require('react-fontawesome');


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
          <ModalComponent currentUser={props.user} handleSubmit={props.handleSubmit} />
          {props.skills && props.skills.map(skill => <div key={skill.id}>
            <p>Skill :{skill.name}</p>

            <FontAwesome
              name='trash'
              size='2x'
              color="blue"
              className="garbage icon"
              // spin
              style={{ backgroundColor: "red" }}

            />
            {/* <FontAwesomeIcon icon={['fal', 'code']} />
          <FontAwesomeIcon icon={faHome} style={{ color: 'red' }} /> */}
          </div>)}
        </div>
        <br />
        <div className="flex-column user-stuff">
          <p className="bold">Interests</p>
          <p className="icon" onClick={() => { console.log('logs') }}>Add new<FontAwesome
            name='plus-square'
            size='2x'
            color="blue"
            className="icon"
            // spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}

          /></p>
          {props.interests && props.interests.map(interest => <div key={interest.id}>
            <p>Interest: {interest.name}</p>

            <FontAwesome
              name='trash'
              size='2x'
              color="blue"
              className="garbage icon"
              // spin
              style={{ backgroundColor: "red" }}

            />

          </div>)}
        </div>
      </div>
    </div>
  )
}


