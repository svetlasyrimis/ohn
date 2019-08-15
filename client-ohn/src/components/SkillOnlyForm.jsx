import React from 'react'
import { Link } from 'react-router-dom';

// import { getSkills } from '../services/skill'


export default class Skills extends React.Component {
  
  constructor(props) {
      // debugger
      super(props);
      this.state = {
        name: '',
      };
    }
  
  
  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleSkillSubmit = ev => {
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
      <h2>Skill form</h2>
        <form onSubmit={this.handleSkillSubmit}>
          <label htmlFor="name">Skill </label>
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
               ></input>
                 <input type="submit" value="Add a skill" />
        </form>
        </>
       
    )
  }
}
