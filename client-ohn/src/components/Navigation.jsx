import React from 'react'
import logo from '../assets/logo.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const Navigation = props => {


  return (
    <div className="nav-bar">

      <Link to='/dashboard'><img src={logo} alt="logo" className="logo" /></Link>
      
      
      <DropdownButton size="lg" id="dropdown-button" alignRight  title={props.currentUser.username}>
        <Dropdown.Item href="/profile" as={Link} to='/profile' >Your Profile</Dropdown.Item>
        <Dropdown.Item href="/projects" as={Link} to='/projects'>Project Board</Dropdown.Item>
        <Dropdown.Item href="/search" as={Link} to='/search'>Join a Project</Dropdown.Item>
        <Dropdown.Item className="logout" as={Button} onClick={props.handleLogout}>Logout</Dropdown.Item>
      </DropdownButton>
      



    </div>


  )

}

export default Navigation

