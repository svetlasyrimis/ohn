import React from 'react'


export default class InterestOnlyForm extends React.Component {
  
    constructor(props) {
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
      
        <form onSubmit={this.handleInterestSubmit}>
          <label htmlFor="name">Interest</label>
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
               ></input>
                 <input type="submit" className="btn btn-outline-dark" value="Add an interest" />
            
        </form>
        
        </>
       
    )
  }
}
