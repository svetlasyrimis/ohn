import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

// Login
const Login = (props) => {


  return (
    <div className="container">
      <div> <img src={logo} alt="logo" className="logo" /></div>
      <div className="auth-container">
        <h2>Welcome to OHN</h2>
        <Link to="/register">Need an account? Sign up now</Link>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }} >
          <p>Username:</p>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} required/>
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} required/>
          <hr />
          <button className="btn btn-outline-dark">Login</button>
          {/* <Link to="/register">Need an account? Sign up now</Link> */}
        </form>
      </div>
    </div>
  );
}

export default Login;