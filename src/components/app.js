import React, { useState, useEffect } from 'react'
import ListBox from './listBox'
import ContentBox from './contentBox'
// import Tasks from './tasks'
import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap'
import Tasks from './tasks'

// let tasks = []

const App = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskList, setTask] = useState([])
  const [currentTask, setCurrentTask] = useState(0)

  const addTask = (event) => {
    event.preventDefault()
    setTask([...taskList, { id: taskList.length, title: taskTitle, todo: [] }])
    setCurrentTask(taskList.length)
  }

  useEffect(() => {
    console.log(taskList)
    console.log(JSON.stringify(taskList))
  }, [taskList])

  const onSelectedTitleChanged = (i) => {
    console.log(i)
    // setCurrentTask(taskList[i])
  }

  const onUpdateTodo = (todo) => {
    console.log(todo)
    // setCurrentTask(taskList[i])
  }

  return (
    // <ToDoList date={new Date().toISOString().slice(0, 10)} />
    <Container className="appContainer">
      <form onSubmit={addTask}>
        <Row>
          <Col>
            <FormControl aria-label="Text input" label="title" name="taskTitle" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
          </Col>
          <Col>
            <Button variant="success" type="submit" value="Submit">Add Task</Button>
          </Col>
        </Row>
      </form>
      <Row>
        <ListBox callbackParent={onSelectedTitleChanged} taskList={taskList} currentTask={currentTask} />
        <ContentBox callbackParent={onUpdateTodo} task={currentTask} />
      </Row>
    </Container>
  )
}

export default App
