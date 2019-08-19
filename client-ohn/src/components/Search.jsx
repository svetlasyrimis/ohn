import React from 'react'
import { searchForProjects } from '../services/search';
import ProjectListSearch from './ProjectListSearch'
import SweetAlert from 'react-bootstrap-sweetalert/lib/dist/SweetAlert';
import Button from 'react-bootstrap/Button'


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
      // debugger;
      console.log(results)
      this.setState({
        projects: results,
        searchData: {
          keyword: ""
        },
      })
    } catch (error) {
      console.log(error)
      this.setState({
        errorMessage: "Sorry, no results found. Try again.",
        keyword:''
      })
    }

  }
  
  hideAlert = () => {
    console.log('Hiding alert...');
    this.setState({
      alert: null,
      errorMessage: ""
    });
  }


  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSearchSubmit} className="flex-row-center">
          <input type="text" name="keyword" className="search-form-item" value={this.state.keyword} onChange={this.handleChange} />
          <button variant="outline-info" className="call-for-action search-form-item"  >Search for a project</button>
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
