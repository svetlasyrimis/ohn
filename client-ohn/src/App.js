import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav'
import Skills from './components/SkillForm'
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/Test'
import Projects from './components/ProjectForm'


import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'
import {
  createSkill,
  getSkills,
  destroySkill
} from './services/skill'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentView: 'login',
      isLoggedIn: false,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      skills: [],
      interests: []
    };
  }

  async componentDidMount() {
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user,
      })
      const skills = await getSkills(this.state.currentUser.id)
      this.setState({
        skills: skills
      })
    } else {
      this.props.history.push("/")
    }
    
  }


  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      teacherForm: {
        ...prevState.teacherForm,
        [name]: value
      }
    }))
  }

  

  // Auth

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData,
      isLoggedIn: true
    })
    this.props.history.push("/dashboard")
  }
  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push("/")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  handleCreateSkill = async (userId, data) => {
    const skill = await createSkill(userId, data);
    console.log(skill);
    this.setState(prevState => ({
      skills: [skill, ...prevState.skills]
    }))
  }
  handleDeleteSkill = async (ev) => { 
    const skillId = ev.target.name
    await destroySkill(this.state.currentUser.id, skillId);
    this.setState(prevState => ({
      skills: prevState.skills.filter(skill =>
        skill.id !== parseInt(skillId)
      )
    }))
    
  }
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" render={() => (<Nav />)} /> */}
        <Route exact path="/" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
          
        {this.state.currentUser &&
          <>
          <Nav handleLogout={this.handleLogout} />
          <Dashboard currentUser={this.state.currentUser} />
          
          <Route
          exact
          path="/skills" 
          render={(props) => (
            <Skills
            
              currentUser={this.state.currentUser}
              handleSubmit={this.handleCreateSkill}
              handleChange={this.handleChange}
              skills={this.state.skills}
              handleDelete={this.handleDeleteSkill}
              
            />
            )} />
          <Route exact path="/test" render={Test} />
          <Route exact path="/projects" render={(props) => (
            <Projects
            
              currentUser={this.state.currentUser}
              handleSubmit={this.handleCreateSkill}
              handleChange={this.handleChange}
              
             
              
            />
            )}/>
          </>
        }
        
      </div>
    );
  }
}

export default withRouter(App);

