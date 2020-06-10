import React from 'react'
import TaskContent from './taskContent'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
// import { Col, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

function TaskContainer (props) {
  console.log('TaskConatiner: props ', props)

  return (
    // <Col>
    //   <Card>
    //     <Card.Body>
    //       <TaskContent />
    //     </Card.Body>
    //   </Card>
    // </Col>
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
