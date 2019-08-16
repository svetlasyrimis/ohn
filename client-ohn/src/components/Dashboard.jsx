import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Dashboard = props => {
  return (
    <div>
      <p className="greeting">Welcome {props.currentUser.username}</p>
      <Link to='/projects'><Button variant="outline-success">Create a Project</Button></Link>
      <Link to='/search'><Button variant="outline-warning">Join a Project</Button></Link>

    </div>
  )

}

export default Dashboard