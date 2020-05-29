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
  console.log(currentTask)
  // console.log(callbackParent)

  const handleClick = (key) => {
    console.log(key)
    setCurrentTask(key)
  }

  useEffect(() => {
    console.log(currentTask)
    props.callbackParent(currentTask)
  }, [currentTask])

  props.taskList.forEach((task, key) => {
    console.log(key)
    console.log(task)
    const className = (key === currentTask) ? 'taskTitle selectedTask' : 'taskTitle'
    taskList.push(
      // <ListGroup.Item key={key} className={className} onClick={handleClick} > {task.title}</ListGroup.Item>
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
