import React, { useState, useEffect } from 'react'
import ListContainer from './listContainer'
import TaskContainer from './taskContainer'
// import Tasks from './tasks'
// import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
// import { Container, Row, Col, Button, FormControl } from 'react-bootstrap'
// import Tasks from './tasks'

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
    setCurrentTask(taskList[i])
  }

  const onUpdateTodo = (todo) => {
    console.log(todo)
    // setCurrentTask(taskList[i])
  }

  return (
    // <ToDoList date={new Date().toISOString().slice(0, 10)} />
    <div className="appContainer">
      <form onSubmit={addTask}>
        <div>
          <div>
            <input type="text" label="title" name="taskTitle" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
            <input type="submit" value="Add Task" />
          </div>
        </div>
      </form>
      <div>
        <ListContainer callbackParent={onSelectedTitleChanged} taskList={taskList} currentTask={currentTask} />
        <TaskContainer callbackParent={onUpdateTodo} task={currentTask} />
      </div>
    </div>
  )
}

export default App
