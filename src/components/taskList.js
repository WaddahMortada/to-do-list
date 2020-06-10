import React, { useState, useEffect } from 'react'
// import Task from './task'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Card,
//   InputGroup,
//   FormControl,
//   ProgressBar,
//   ListGroup
// } from 'react-bootstrap'

function TaskList (props) {
  const taskList = []
  const [currentTask, setCurrentTask] = useState(props.currentTask)
  // const callbackParent = props.callbackParent

  // console.log(taskList)
  console.log('TaskList: currentTask ', currentTask)
  // console.log(callbackParent)

  const handleClick = (key) => {
    console.log('TaskList: handleClick ', key)
    setCurrentTask(key)
  }

  useEffect(() => {
    console.log('TaskList: useEffect currentTask ', currentTask)
    props.callbackParent(currentTask)
  }, [currentTask])

  props.taskList.forEach((task, key) => {
    console.log('TaskList: forEach key ', key)
    console.log('TaskList: forEach task ', task)
    const className = (key === currentTask) ? 'taskTitle selectedTask' : 'taskTitle'
    taskList.push(
      <li key={key} className={className} onClick={() => handleClick(key)}>{task.title}</li>
    )
  })

  return (
    <div>
      <ul>
        {taskList}
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
