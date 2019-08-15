import React from 'react'
import ProjectList from './ProjectList'
import { searchForProjects } from '../services/search';


export default class Search extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      
      keyword: "",
      
      projects:[]
    }
  }

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleSearchSubmit = async (ev) => {
    ev.preventDefault()
    const results = await searchForProjects(this.state.keyword)
    debugger;
    console.log(results)
    this.setState({
      projects: results,
      searchData: {
        keyword: ""
      },
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange} />
        <input type="submit" value="Search for a project" />
        </form>
        <ProjectList projects={this.state.projects}/>
          
      </div>
    )
  }
}
