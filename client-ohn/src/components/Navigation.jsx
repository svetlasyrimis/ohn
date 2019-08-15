import React from 'react'
import logo from '../assets/logo.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Navigation = props => {

  
    return (
      <div className="nav-bar">
        <img src={logo} alt="logo" className="logo" />
        <Link to='/profile'><Button variant="outline-info">Your Profile</Button></Link>
        <Button variant="outline-dark" onClick={props.handleLogout}>Logout</Button>
        
      
 
      </div>
     
      
    )
  
}

export default Navigation

