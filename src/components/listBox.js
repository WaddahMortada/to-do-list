import React from 'react'
import TasksList from './tasksList'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
import { Col, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

function ListBox (props) {
  console.log(props)
  return (
    // <Col>
    //   <div>
    //     <TasksList callbackParent={props.callbackParent} taskList={props.taskList} currentTask={props.currentTask} />
    //   </div>
    // </Col>
    <Col>
      <Card>
        <Card.Body>
          <TasksList callbackParent={props.callbackParent} taskList={props.taskList} currentTask={props.currentTask} />
        </Card.Body>
      </Card>
    </Col>
  )
}

ListBox.propTypes = {
  taskList: PropTypes.any,
  currentTask: PropTypes.any,
  callbackParent: PropTypes.any
}

export default ListBox
