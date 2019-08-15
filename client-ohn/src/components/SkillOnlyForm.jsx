import React from 'react'
import Button from 'react-bootstrap/Button'


export default class SkillOnlyForm extends React.Component {

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
    debugger
    this.props.handleSubmit(id, this.state);

    this.setState({
      name: '',
    });


  }



  render() {

    return (

      <>
        
        <form onSubmit={this.handleSkillSubmit}>
          <label htmlFor="name">Skill </label>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          ></input>
          <input type="submit" value="Add a skill" className="btn btn-outline-dark" />
        </form>
      </>

    )
  }
}
