import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


const Nav = props => {

  
    return (
      <div>
         <button onClick={props.handleLogout}>Logout</button>
      </div>
    )
  
}

export default Nav

