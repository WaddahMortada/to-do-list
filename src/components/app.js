import React from 'react'
import ToDoList from './toDoList'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <ToDoList date={new Date().toISOString().slice(0, 10)} />
  )
}

export default App
