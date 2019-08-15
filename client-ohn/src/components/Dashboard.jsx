import React from 'react'


import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import NewModal from './NewModal'

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
          <NewModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </NewModal>
          <button type="button" onClick={this.showModal}>
          open
        </button>
            <Link to='/skills'><Button variant="outline-danger">Skills</Button></Link>
          <Link to='/interests'><Button variant="outline-info">Interests</Button></Link>
         

            
      </div>
    )
    }
}

export default Dashboard