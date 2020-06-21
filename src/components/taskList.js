import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'

const TaskList = props => {
  const taskList = []

  const handleClick = (key) => {
    props.callbackParent(key)
  }

  props.taskList.forEach((task, key) => {
    const className = (key === props.currentTask) ? 'taskTitle selectedTask' : 'taskTitle'
    taskList.push(
      <li key={key} className={className} onClick={() => handleClick(key)}>{task.title}</li>
    )
  })

  return (
    <div>
      <ul>
        {taskList.length > 0 ? taskList : <li key="0">No tasks</li>}
      </ul>
    </div>
  )
}

TaskList.propTypes = {
  taskList: PropTypes.any,
  currentTask: PropTypes.any,
  callbackParent: PropTypes.any
}

export default TaskList
