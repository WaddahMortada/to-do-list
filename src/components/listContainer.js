import React from 'react'
import List from './taskList'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
// import { Col, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

function ListContainer (props) {
  console.log('ListContainer: props ', props)
  return (
    // <Col>
    //   <Card>
    //     <Card.Body>
    //       <TasksList callbackParent={props.callbackParent} taskList={props.taskList} currentTask={props.currentTask} />
    //     </Card.Body>
    //   </Card>
    // </Col>
    <div className="listContainer">
      <List callbackParent={props.callbackParent} taskList={props.taskList} currentTask={props.currentTask} />
    </div>
  )
}

ListContainer.propTypes = {
  taskList: PropTypes.any,
  currentTask: PropTypes.any,
  callbackParent: PropTypes.any
}

export default ListContainer
