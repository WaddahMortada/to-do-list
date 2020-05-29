import React, { useState, useEffect } from 'react'
import Task from './task'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  InputGroup,
  FormControl,
  ProgressBar,
  ListGroup
} from 'react-bootstrap'

function TasksList (props) {
  const taskList = []
  const currentTask = props.currentTask
  // const callbackParent = props.callbackParent

  // console.log(taskList)
  console.log(currentTask)
  // console.log(callbackParent)

  const handleClick = (event) => {
    console.log(event.currentTarget)
  }

  props.taskList.forEach((task, key) => {
    console.log(key)
    console.log(task)
    const className = (key === props.currentTask) ? 'taskTitle selectedTask' : 'taskTitle'
    taskList.push(
      <ListGroup.Item key={key} className={className} onClick={handleClick} > {task.title}</ListGroup.Item>
    )
  })

  // <li key={task.id} className={className} onClick={handleClick}>{task.title}</li>
  // < ListGroup.Item key = { key } className = { className } onClick = { handleClick } > { task.title }</ListGroup.Item >
  // <ListGroup>
  //   {taskList}
  // </ListGroup>

  return (
    <ListGroup>
      {taskList}
    </ListGroup>
  )
}

TasksList.propTypes = {
  taskList: PropTypes.any,
  currentTask: PropTypes.any,
  callbackParent: PropTypes.any
}

export default TasksList
