import React from 'react'

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      userId: '',
      isEdit: null
    }
  }
  render() {
    return (
      <div>
        <p>Hey</p>
      </div>
    )
  }
}
