import React from 'react'
import { searchForProjects } from '../services/search';
import ProjectListSearch from './ProjectListSearch'
import SweetAlert from 'react-bootstrap-sweetalert/lib/dist/SweetAlert';



export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: "",
      projects: [],
      errorMessage: ''
    }
  }

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleSearchSubmit = async (ev) => {

    ev.preventDefault();
    try {

      const results = await searchForProjects(this.state.keyword)
      this.setState({
        projects: results,
        keyword: ""
      })
    } catch (error) {
      this.setState({
        errorMessage: "Sorry, no results found. Try again.",
        keyword:''
      })
    }
  }
  
  hideAlert = () => {
    this.setState({
      alert: null,
      errorMessage: ""
    });
  }


  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSearchSubmit} >
          <input type="text" name="keyword" className="search-form-item" value={this.state.keyword} onChange={this.handleChange} placeholder="Enter a keyword" size="30" required/>
          <button className="call-for-action search-form-item btn-outline-info">Search for a project</button>
        </form>
        {this.state.errorMessage !== "" && (<SweetAlert
          error
          showCloseButton={true}
          showConfirm={false}
          closeOnClickOutside={true}
          timeout={4000}
          title="Oops!"
          onCancel={(e) => { this.hideAlert(e) }}
          onConfirm={(e) => { this.hideAlert(e) }}>
          {this.state.errorMessage}
        </SweetAlert>)}
        {!this.state.errorMessage &&
          <ProjectListSearch becomeCollaborator={this.props.becomeCollaborator} projects={this.state.projects} currentUser={this.props.user} />}

      </div>
    )
  }
}
