import React, { useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'

const TaskContent = props => {
  const todoComponent = []
  const [index, setIndex] = useState(0)
  const todo = (props.task) ? props.task.todo : []
  const [inputText, setInputText] = useState('')

  todo.forEach((task, key) => {
    const showInput = (index === key) || !task
    todoComponent.push(
      <li key={key}>
        <input type="checkbox" />
        {
          showInput
            ? <input type="text" autoFocus onChange={e => setInputText(e.target.value)} onBlur={() => handleBlur(key)} value={inputText} />
            : <p style={{ display: 'inline-block', paddingLeft: '5px' }} onClick={() => handleClick(key)}>{task}</p>
        }
      </li>
    )
  })

  const handleBlur = (key) => {
    if (inputText) {
      todo[key] = inputText
    } else {
      delete todo[key]
    }

    setIndex(null)
    setInputText('')
    props.callbackParent(todo)
  }

  const handleClick = (index) => {
    setIndex(index)
    setInputText(todo[index])
  }

  const addNewItem = () => {
    props.callbackParent([...todo, ''])
  }

  if (props.task && props.task.todo) {
    return (
      <div>
        <ul style={{ float: 'left' }}>
          {todoComponent}
        </ul>
        <button style={{ float: 'right' }} onClick={addNewItem}>+</button>
      </div>
    )
  }

  return (<div></div>)
}

TaskContent.propTypes = {
  task: PropTypes.any,
  callbackParent: PropTypes.any
}

export default TaskContent
