import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'



const Register = (props) => {

  return (
    <div className="container">
    <div><img src={logo} alt="logo" className="logo" /></div>
    <div className="auth-container">
        <h2>Welcome to OHN</h2>
        <Link to="/">Already a member? Sign in here.</Link>
      <hr />
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} required/>
          <p>Email:</p>
          
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} required/>
          <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} required/>
        <hr/>
        <button className="btn-outline-dark">Register</button>
        
      </form>
    </div>
    </div>
  );
}

export default Register;