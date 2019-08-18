import React from 'react'
import { searchForProjects } from '../services/search';
import ProjectListSearch from './ProjectListSearch'

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
        errorMessage: "Sorry, no results found. Try again."
      })
    }
    
  }

  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange} />
          <input type="submit" value="Search for a project" />
        </form>
        <ProjectListSearch becomeCollaborator={this.props.becomeCollaborator} projects={this.state.projects} currentUser={this.props.user}/>

      </div>
    )
  }
}
