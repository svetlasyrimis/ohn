import React from 'react'

export default function TaskList(props) {
  return (
    <div>
      {props.tasks && props.tasks.map(task => 
        <div key={task.id}>
            <p>{task.name}</p>
            <p>{task.isCompleted ? "Completed" : "Not completed"}</p>
          <button name={task.id} onClick={props.handleDelete}>Delete a task</button>
          
        </div>)}
    </div>
  )
}
