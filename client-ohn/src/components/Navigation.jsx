import React from 'react'
import logo from '../assets/logo.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
// import LinkContainer from 'react-router-bootstrap'


const Navigation = props => {


  return (
    <div className="nav-bar">

      <Link to='/dashboard'><img src={logo} alt="logo" className="logo" /></Link>
      <Link to='/profile'><Button variant="outline-info">Your Profile</Button></Link>
      <DropdownButton id="dropdown-basic-button" title={props.currentUser.username}>
        <Dropdown.Item href="/profile" as={Link} to='/profile' >Your Profile</Dropdown.Item>
        <Dropdown.Item href="/projects" as={Link} to='/projects'>Project Board</Dropdown.Item>
        <Dropdown.Item href="/search" as={Link} to='/search'>Join a Project</Dropdown.Item>
        
      </DropdownButton>
      <Button variant="outline-dark" onClick={props.handleLogout}>Logout</Button>



    </div>


  )

}

export default Navigation

{/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */}