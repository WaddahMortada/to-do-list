import React, { useState, useEffect } from 'react'
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
  ProgressBar
} from 'react-bootstrap'

function TaskContent (props) {
  return (
    <Card className="contentContainer">
      <Card.Body>
        <Col className="tasksContent">Task Content</Col>
      </Card.Body>
    </Card>
  )
}

export default TaskContent
