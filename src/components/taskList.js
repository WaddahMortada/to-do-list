import React from 'react'
import PropTypes from 'prop-types'
import styles from '../style/style.css' // eslint-disable-line no-unused-vars

const TaskList = props => {
  const taskList = []

  const handleClick = (key) => {
    props.callbackParent(key)
  }

  props.taskList.forEach((task, key) => {
    const className = (key === props.currentTask) ? 'taskTitle selectedTask' : 'taskTitle'
    taskList.push(
      <li key={key} className={className} onClick={() => handleClick(key)}>
        <p>{task.title} <small>{task.progress}%</small></p>
      </li>
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
