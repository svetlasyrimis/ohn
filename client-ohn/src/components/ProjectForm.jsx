import React from 'react'

class Project extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      projectData: {
        name: '',
        description: ''
      }
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleProjectSubmit}>
          <label htmlFor="name">Project </label>
          <input
            type='text'
            value={this.state.projectData.name}
            onChange={this.props.handleChange}
            name="name"
          ></input>
          <input
            type='text'
            value={this.state.projectData.description}
            onChange={this.props.handleChange}
            name="description"
            size="35"
            width="300px"
          ></input>
          <input type="submit" value="Add a project" />

        </form>
      </div>
    )
  }
}

export default Project
