import React, { Component } from 'react'

import { Link } from 'react-router-dom'



const Dashboard = props => {
          
    return (
      <div>
        
        <p>Hey this is your dashboard
          welcome {props.currentUser.username}
          <br />
          <Link to='/skills'>Create New Skill</Link>
        </p>
       
      </div>
    )
  
}

export default Dashboard