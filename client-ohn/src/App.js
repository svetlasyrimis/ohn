import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation'
import { Redirect,Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Search from './components/Search'
import SweetAlert from 'react-bootstrap-sweetalert'

// import 'react-router-modal/css/react-router-modal.css'


import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'
import {
  createSkill,
  // getSkills,
  destroySkill
} from './services/skill'

import {
  // getProjects,
  deleteProject,
  createProject
} from './services/project'
import './App.css';
import {
  // getInterests,
  destroyInterest,
  createInterest
} from './services/interest';
// import SkillList from './components/SkillList';
import ProfilePage from './components/ProfilePage';
import { becomeCollaborator } from './services/search';



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
      errorLogin: '',
      initAlert: false
    };

  }

  async componentDidMount() {
    const user = await verifyUser();
    if (user) {

      this.setState({
        currentUser: user,
        projects: user.projects.reverse(),
        skills: user.skills,
        interests: user.interests,
        collabFor: user.collabFor,
      })
      // console.log(this.state.collabFor)
      // const skills = await getSkills(this.state.currentUser.id)
      // const interests = await getInterests(this.state.currentUser.id)
    } else {
      this.props.history.push("/")
    }
  }

  handleLogin = async () => {
    try {
      const userData = await loginUser(this.state.authFormData);
      this.setState({
        currentUser: userData,
        skills: userData.skills,
        interests: userData.interests,
        projects: userData.projects,
        collabFor: userData.collabFor,
        isLoggedIn: true,
        initAlert: true,
        editProfileMessage: "Edit your profile by adding your skills and interests"
      })
      if (this.state.skills.length === 0 || this.state.interests.length === 0 ) {
        this.props.history.push("/profile")
      } else {
        this.props.history.push("/dashboard")
      }
    } catch (e) {
      console.log(e)
      this.setState({
        errorLogin: "Invalid username or password. Try again."
      })
    }
    
    
  }

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    try {
      const resp = await registerUser(this.state.authFormData);
      this.handleLogin();
      console.log(resp)
    } catch (er) {
      console.log(er.response.data)
      this.setState({
        errorRegister: er.response.data.join('.')
      })
      // console.log(this.state.errorRegister)
    }
    
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
      isLoggedIn: false,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
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

  // skills
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
  deleteThisProject = async (id) => {
    console.log("Deleted")
    await deleteProject(id)
    this.setState(prevState => ({
      projects: prevState.projects.filter(project =>
        project.id !== parseInt(id)
      )
    }))
  }


  // handleDeleteProject = async (ev) => {
  //   console.log("handleDeleteProject");
  //   this.hideAlert(true);
  // }

  // handleReallyDeleteProject = async (ev) => {
  //   console.log("Deleted")
  //   const id = ev.target.name
  //   await deleteProject(id)

  //   this.setState(prevState => ({
  //     projects: prevState.projects.filter(project =>
  //       project.id !== parseInt(id)
  //     )
  //   }))
  //   this.hideAlert(false);
  // }

  addUserAsCollaborator = async (ev) => {
    ev.preventDefault();
    const projectId = ev.target.name
    const resp = await becomeCollaborator(projectId)
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        collabFor: [
          ...prevState.currentUser.collabFor,
          resp
        ],

      },
      collabFor: [...prevState.currentUser.collabFor.reverse(),
        resp]
    }))
  }

  hideAlert = () => {
    console.log('Hiding alert...');
    this.setState({
      errorLogin: "",
      initAlert: false,
      errorRegister: ""
    });
  }


  render() {
    
    return (
      <div className="App">
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
         {this.state.errorLogin !== "" && (<SweetAlert
          error
          showCloseButton={true}
          showConfirm={false}
          closeOnClickOutside={true}
          timeout={3000}
          title="Invalid username or password. Try again."
          onCancel={(e) => { this.hideAlert(e) }}
          onConfirm={(e) => { this.hideAlert(e) }}>
          
          
          
        </SweetAlert>)}
        {this.state.errorRegister && (<SweetAlert
          error
          showCloseButton={true}
          showConfirm={false}
          closeOnClickOutside={true}
          timeout={3000}
          customClass="error"
          title="Error"
          onCancel={(e) => { this.hideAlert(e) }}
          onConfirm={(e) => { this.hideAlert(e) }}>{this.state.errorRegister}</SweetAlert>)}
        

        {this.state.initAlert && !this.state.skills.length && !this.state.interests.length &&
         
          (<SweetAlert
          success
          showConfirm={false}
          closeOnClickOutside={true}
          timeout={3000}
          title="Successfully logged in"
          onCancel={(e) => { this.hideAlert(e) }}
          onConfirm={(e) => { this.hideAlert(e) }}>
          {this.state.editProfileMessage}
          </SweetAlert>)}
        {this.state.initAlert && this.state.skills.length && this.state.interests.length &&
          (<SweetAlert
            success
            showConfirm={false}
            closeOnClickOutside={true}
            timeout={3000}
            title="Successfully logged in"
            onCancel={(e) => { this.hideAlert(e) }}
            onConfirm={(e) => { this.hideAlert(e) }}>
            
            </SweetAlert>)
        }
        {this.state.currentUser && 
          <>
          
          <Navigation
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
            handleClick={this.handleClick}/>
            
            
            <Route exact path="/dashboard" render={(props) => (
              <Dashboard
              currentUser={this.state.currentUser}
              
            />)} />
          
            <p className="greeting" >Build anything</p>
            <Route exact path="/projects" render={(props) => (
              <Projects
                {...props}
                currentUser={this.state.currentUser}
                handleSubmit={this.handleCreateProject}
                projects={this.state.projects}
                // handleDelete={this.handleDeleteProject}
                collabFor={this.state.collabFor}
                deleteThisProject={this.deleteThisProject}
              >
              </Projects>
            )} />

            <Route exact path="/projects/:project_id" render={(props) =>
              <ProjectDetails id={props.match.params.project_id} />
          } />
          
            <Route exact path="/profile" render={(props) => (
              <ProfilePage
                {...props}
                user={this.state.currentUser}
                interests={this.state.interests}
                skills={this.state.skills}
                handleSubmit={this.handleCreateSkill}
                handleDelete={this.handleDeleteSkill}
                handleSubmitInt={this.handleCreateInterest}
                handleDeleteInt={this.handleDeleteInterest}
              />)}
          />
          
            <Route exact path="/search" render={(props) => (
              <Search
                user={this.state.currentUser}
                interests={this.state.interests}
                skills={this.state.skills}
                becomeCollaborator={this.addUserAsCollaborator}
              />)}
            />
          </>
        }
      </div>
    );
  }
}

export default withRouter(App);



