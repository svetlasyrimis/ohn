import React from 'react'


import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


class Dashboard extends React.Component  {
  constructor() {
    super()
    this.state = { show: false };
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      
      <div className="skill-interests-div">
         
            {/* <Link to='/skills'><Button variant="outline-danger">Skills</Button></Link> */}
          <Link to='/interests'><Button variant="outline-info">Interests</Button></Link>
         

            
      </div>
    )
    }
}

export default Dashboard