import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'

function TaskContent (props) {
  console.log('TaskContent: props ', props)
  const todoComponent = []
  const [inputFocus, setInputFocus] = useState(false)
  const [index, setIndex] = useState(0)
  const [todo, setTodo] = useState(props.task.todo)
  const [inputText, setInputText] = useState('')

  console.log(inputText)

  console.log('TaskContent: todo ', todo)

  todo.forEach((task, key) => {
    const showInput = inputFocus && (index === key)
    todoComponent.push(
      <li key={key}>
        <input type="checkbox" />
        {
          showInput
            ? <input type="text" autoFocus onChange={e => setInputText(e.target.value)} onBlur={() => handleBlur(key)} value={inputText} />
            : < p onClick={() => handleClick(key)}>{task}</p>
        }
      </li>
    )
  })
  if (todoComponent.length === 0) {
    todoComponent.push(
      <li key="0">
        <input type="checkbox" />
        {
          inputFocus && (index === 0)
            ? <input type="text" autoFocus onChange={e => setInputText(e.target.value)} onBlur={() => handleBlur(0)} value={inputText} />
            : < p onClick={() => handleClick(0)}>Click to add ToDo</p>
        }
      </li>
    )
  }

  const handleBlur = (key) => {
    console.log('blured')
    console.log(key)
    console.log(inputText)

    setInputFocus(false)

    if (inputText) {
      todo[index] = inputText
      setTodo(todo)
    } else {
      // delete item
    }
  }

  const handleClick = (key) => {
    console.log('clicked')
    console.log(key)
    setIndex(key)
    setInputFocus(true)
  }

  return (
    <div>
      <ul>
        {todoComponent}
      </ul>
    </div>
  )
}

TaskContent.propTypes = {
  task: PropTypes.any,
  callbackParent: PropTypes.any
}

export default TaskContent
