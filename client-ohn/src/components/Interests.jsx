import React from 'react'
import { Link } from 'react-router-dom';
import InterestList from './InterestList'


export default class Interests extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        interests: this.props.interests,
        
      };
      console.log(props)
    }
  
  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleInterestSubmit = ev => {
    ev.preventDefault();
    const { id } = this.props.currentUser;
    ev.preventDefault();
    
    this.props.handleSubmit(id, this.state);
    
    this.setState({
      name: '',
    });
  }
 
  

  render() {
    
    return (
      
      <>
      <h2>Interest</h2>
        <form onSubmit={this.handleInterestSubmit}>
          <label htmlFor="name">Interest</label>
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
               ></input>
                 <input type="submit" value="Add an interest" />
            
        </form>
        <InterestList interests={this.props.interests} handleDelete={this.props.handleDelete} />
        <Link to='/dashboard'>Back</Link>
        </>
       
    )
  }
}
