import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'

function TaskContent (props) {
  console.log('TaskContent: props ', props)
  const todoComponent = []
  const [inputFocus, setInputFocus] = useState(false)
  const [index, setIndex] = useState(0)
  const [todo, setTodo] = useState((props.task) ? props.task.todo : [])
  const [inputText, setInputText] = useState('')

  console.log(inputText)

  console.log('TaskContent: todo ', todo)

  todo.forEach((task, key) => {
    const showInput = (inputFocus && (index === key)) || !task
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

  const handleBlur = (key) => {
    console.log('blured')
    console.log(key)
    console.log(inputText)

    if (inputText) {
      todo[key] = inputText
    } else {
      delete todo[key]
    }

    setInputText('')
    setInputFocus(false)
    setTodo(todo)
    props.callbackParent(todo)
  }

  const handleClick = (key) => {
    console.log('clicked')
    console.log(key)
    setIndex(key)
    setInputFocus(true)
    setInputText(todo[key])
  }

  const addNewItem = () => {
    setTodo([...todo, ''])
  }

  let component

  if (props.task && props.task.todo) {
    component = <div>
      <ul style={{ float: 'left' }}>
        {todoComponent}
      </ul>
      <button style={{ float: 'right' }} onClick={addNewItem}>+</button>
    </div>
  }

  return (
    <div>
      {component}
    </div>
  )
}

TaskContent.propTypes = {
  task: PropTypes.any,
  callbackParent: PropTypes.any
}

export default TaskContent
