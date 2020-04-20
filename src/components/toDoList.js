import React, { Component, useState, useEffect } from 'react'
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

const ParentComponent = ({ progressBar, children }) => {
  return (
    <Card>
      {progressBar}
      <Card.Body className="toDoCard">
        {children}
      </Card.Body>
    </Card>
  )
}

ParentComponent.propTypes = {
  children: PropTypes.any,
  progressBar: PropTypes.any
}

const ChildComponent = () => {
  return (
    <Row>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup.Prepend>
        <FormControl aria-label="Text input with checkbox" />
        <InputGroup.Prepend>
          <Button variant="danger" className="remove rounded-right">X</Button>
        </InputGroup.Prepend>
      </InputGroup>
    </Row>
  )
}

function ToDoList (props) {
  const children = []
  const [date] = useState(props.date)
  const [numChildren, setNumChildren] = useState(1)
  const [progress, setProgress] = useState(30)

  const handleClick = (event) => {
    console.log('yep')
    setNumChildren(numChildren + 1)
  }

  for (let i = 0; i < numChildren; i++) {
    children.push(<ChildComponent key={i} />)
  }

  const progressBar = <ProgressBar className="progressBar" now={progress} />

  return (
    <Container>
      <Row className="title">
        <Col></Col>
        <Col><h1>ToDo List</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col><h6 className="date"><b>Date:</b> {date}</h6></Col>
        <Col></Col>
        <Col><Button variant="success" className="addToDo" id="addToDo" onClick={handleClick}>Add</Button></Col>
      </Row>
      <br />
      <ParentComponent>
        {progressBar}
        {children}
      </ParentComponent>
    </Container>
  )
}

ToDoList.propTypes = {
  date: PropTypes.any
}

export default ToDoList
