import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import SkillList from './SkillList'


export default class Skills extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        skills: this.props.skills,
        
      };
      console.log(props)
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
    
    // this.props.history.push(`/users/${id}`);
  }
  // async componentDidMount() {
  //   const { id } = this.props.currentUser;
  //   const skills = await getSkills(id)
  //   console.log(skills)
    
  // }
  

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
        <SkillList skills={this.props.skills} handleDelete={this.props.handleDelete} />
        <Link to='/dashboard'>Back</Link>
        </>
       
    )
  }
}
