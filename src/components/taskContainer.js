import React from 'react'
import TaskContent from './taskContent'
import PropTypes from 'prop-types'
import styles from '../style/style.css' // eslint-disable-line no-unused-vars

const TaskContainer = props => {
  console.log('TaskConatiner: props ', props)

  return (
    <div className="taskContainer">
      <TaskContent callbackParent={props.callbackParent} task={props.task} />
    </div>
  )
}

TaskContainer.propTypes = {
  task: PropTypes.any,
  callbackParent: PropTypes.any
}

export default TaskContainer
