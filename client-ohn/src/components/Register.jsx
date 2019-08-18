import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


// This component handles our register form
const Register = (props) => {

  return (
    <div className="container">
    <div><img src={logo} alt="logo" className="logo" /></div>
    <div className="auth-container">
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <hr/>
        <input type="submit" value="Register"></input>
        <Link to="/">Login</Link>
      </form>
    </div>
    </div>
  );
}

export default Register;