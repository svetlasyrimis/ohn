import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav'
import Skills from './components/SkillForm'
import { Route,Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/ProjectForm'
import Interests from './components/Interests'

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

import {
  getProjects,
  deleteProject,
  createProject
} from './services/project'
import './App.css';
import {
  getInterests,
  destroyInterest,
  createInterest
} from './services/interest';
import SkillList from './components/SkillList';


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
      interests: [],
      projects: [],
      
    };

  }

  async componentDidMount() {
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user,
      })
      const skills = await getSkills(this.state.currentUser.id)
      // debugger
      const interests = await getInterests(this.state.currentUser.id)
      const projects = await getProjects()
      
      this.setState({
        skills: skills,
        projects: projects,
        interests: interests
      })
      // debugger
    } else {
      this.props.history.push("/")
    }
    
    console.log(this.state.skills)
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
  // skill 
  handleCreateSkill = async (userId, data) => {
    const skill = await createSkill(userId, data);
    console.log(skill);
    this.setState(prevState => ({
      skills: [skill, ...prevState.skills]
    }))
  }
  handleDeleteSkill = async (ev) => { 
    
    const skillId = ev.target.name
    console.log(ev.target.name)
    await destroySkill(this.state.currentUser.id, skillId);
    this.setState(prevState => ({
      skills: prevState.skills.filter(skill =>
        skill.id !== parseInt(skillId)
      )
    }))
    
  }
  //interest
  handleCreateInterest = async (userId, data) => {
    const interest = await createInterest(userId, data);
    console.log(interest);
    this.setState(prevState => ({
      interests: [interest, ...prevState.interests]
    }))
  }
  handleDeleteInterest = async (ev) => { 
    const interestId = ev.target.name
    console.log(ev.target.name)
    await destroyInterest(this.state.currentUser.id, interestId);
    this.setState(prevState => ({
      interests: prevState.interests.filter(interest =>
        interest.id !== parseInt(interestId)
      )
    }))
    
  }

  // project 
  handleCreateProject = async (data) => {
    const project = await createProject(data);
    
    console.log(project);
    this.setState(prevState => ({
      projects: [project, ...prevState.projects],
     
    }))
    
  }

  handleDeleteProject = async (ev) => {
    const id = ev.target.name
    const resp = await deleteProject(id)
    
    this.setState(prevState => ({
      projects: prevState.projects.filter(project =>
        project.id !== parseInt(id)
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
          {/* <Dashboard currentUser={this.state.currentUser} /> */}
          <p>Hey this is your dashboard
          welcome {this.state.currentUser.username}</p>
          <Link to='/skills'>Skills</Link>
          <Link to='/projects'>Project</Link>
          <Link to='/interests'>Interests</Link>
          <Route
          exact
          path="/skills" 
          render={(props) => (
            <Skills
              {...props}
              currentUser={this.state.currentUser}
              handleSubmit={this.handleCreateSkill}
              skills={this.state.skills}
              handleDelete={this.handleDeleteSkill}
              
            />
            
            )}  />
        
          <Route exact path="/projects" render={(props) => (
            <Projects
              {...props}
              currentUser={this.state.currentUser}
              handleSubmit={this.handleCreateProject}
              projects={this.state.projects}
              handleDelete={this.handleDeleteProject}
             
              
            />
          )} />
          <Route exact path="/interests" render={(props) => (
            <Interests
              {... props}
              currentUser={this.state.currentUser}
              handleSubmit={this.handleCreateInterest}
              interests={this.state.interests}
              handleDelete={this.handleDeleteInterest}
             
              
            />
            )}/>
          </>
        }
        
      </div>
    );
  }
}

export default withRouter(App);

