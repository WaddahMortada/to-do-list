import React, { useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'

const EditModule = props => {
  const [title, setTitle] = useState(props.task.title)

  const editTask = () => {
    props.updateTitle(title)
  }

  const deleteTask = () => {
    if (window.confirm('Are you sure to delete this task?')) props.deleteTask()
  }

  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <button onClick={editTask}>Submit</button>
      <button onClick={deleteTask}>Delete</button>
      <button onClick={props.closeModule}>Close</button>
    </div>
  )
}

EditModule.propTypes = {
  task: PropTypes.any,
  updateTitle: PropTypes.any,
  deleteTask: PropTypes.any,
  closeModule: PropTypes.any
}

export default EditModule
