import React, { Component } from 'react'
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

class ToDoList extends Component {
  constructor (props) {
    super()
    this.state = { date: props.date, numChildren: 1, progress: 30 }
    this.handleClick = this.handleClick.bind(this)
  }

  static get propTypes () {
    return {
      date: PropTypes.any
    }
  }

  componentDidMount () {
    const el = document.getElementById('addToDo')
    el.addEventListener('click', this.handleClick, false)
  }

  handleClick (event) {
    console.log('yep')
    this.setState({ numChildren: this.state.numChildren + 1 })
  }

  render () {
    const children = []

    for (let i = 0; i < this.state.numChildren; i++) {
      children.push(<ChildComponent key={i}/>)
    }

    const progressBar = <ProgressBar className="progressBar" now={this.state.progress}/>

    return (
      <Container>
        <Row className="title">
          <Col></Col>
          <Col><h1>ToDo List</h1></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col><h6 className="date"><b>Date:</b> {this.state.date}</h6></Col>
          <Col></Col>
          <Col><Button variant="success" className="addToDo" id="addToDo">Add</Button></Col>
        </Row>
        <br/>
        <ParentComponent>
          {progressBar}
          {children}
        </ParentComponent>
      </Container>
    )
  }
}

export default ToDoList
