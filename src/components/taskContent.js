import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import styles from '../style/style.css' // eslint-disable-line no-unused-vars

const TaskContent = props => {
  const todoComponent = []
  // TODO: Remove index state hack!!!
  const [index, setIndex] = useState(0)
  const todo = (props.task) ? props.task.todo : []
  const [inputText, setInputText] = useState('')

  todo.forEach((task, key) => {
    const showInput = (index === key) || !task.text
    todoComponent.push(
      <li key={key}>
        <input type="checkbox" onChange={() => handleOnChangeCheck(key)} checked={task.checked} />
        {
          showInput
            ? <input type="text" autoFocus onChange={e => setInputText(e.target.value)} onBlur={() => handleBlur(key)} value={inputText} />
            : <p style={{ display: 'inline-block', paddingLeft: '5px' }} onClick={() => handleClick(key)}>{task.text}</p>
        }
      </li>
    )
  })

  const handleOnChangeCheck = (key) => {
    console.log('handleCheck')
    console.log(key)
    todo[key].checked = !todo[key].checked
    props.callbackParent(todo)
  }

  const handleBlur = (key) => {
    if (inputText) {
      todo[key].text = inputText
    } else {
      todo.splice(key, 1)
    }

    setIndex(null)
    setInputText('')
    props.callbackParent(todo)
  }

  const handleClick = (index) => {
    setIndex(index)
    setInputText(todo[index].text)
  }

  const addNewItem = () => {
    props.callbackParent([...todo, { text: '', checked: false }])
  }

  if (props.task && props.task.todo) {
    return (
      <div>
        <ProgressBar progress={(props.task) ? props.task.progress : 0} />
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
