import React from 'react'

import { Link } from 'react-router-dom'



const Dashboard = props => {
          
    return (
      <div>
        
        <p>Hey this is your dashboard
          welcome {props.currentUser.username}
         
          <br />
          <Link to='/skills'>Skills</Link>
          <Link to='/interests'>Interests</Link>
          <Link to='/projects'>Project</Link>
        </p>
       
      </div>
    )
  
}

export default Dashboard