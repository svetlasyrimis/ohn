import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Dashboard = props => {
  return (
    <div className="dashboard-buttons">
      {/* <p className="greeting" >Build anything</p> */}
      <Link to='/projects'><Button size="lg" className="call-for-action" variant="outline-success">Project Board</Button></Link>
      <Link to='/search'><Button size="lg" variant="outline-warning" className="call-for-action">Join a Project</Button></Link>

    </div>
  )

}

export default Dashboard