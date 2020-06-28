import React, { useState, useEffect } from 'react'
import ListContainer from './listContainer'
import TaskContainer from './taskContainer'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
import EditModule from './editModule'

const App = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskList, setTaskList] = useState([])
  const [currentTask, setCurrentTask] = useState(0)
  const [edit, setEdit] = useState(false)

  // console.log('App: currentTask ', currentTask)
  // console.log('App: taskList ', taskList)
  // console.log('App: task ', taskList[currentTask])
  const addTask = (event) => {
    event.preventDefault()
    if (taskTitle) {
      setTaskList([...taskList, { title: taskTitle, todo: [] }])
      setCurrentTask(taskList.length)
      setTaskTitle('')
    }
  }

  // useEffect(() => {
  //   console.log('App: taskList ', taskList)
  //   console.log('App: Stringify taskList ', JSON.stringify(taskList))
  // }, [taskList])

  const onSelectedTitleChanged = (i) => {
    console.log('App: onSelectedTitleChanged ', i)
    setCurrentTask(i)
  }

  const onUpdateTodo = (todo) => {
    console.log('App: onUpdateTodo ', todo)
    taskList[currentTask].todo = todo
    setTaskList([...taskList])
  }

  const editCurrentTask = () => {
    setEdit(true)
  }

  const deleteTask = () => {
    taskList.splice(currentTask, 1)
    const t = [...taskList]
    setTaskList(t)
    setCurrentTask((t.length > 1) ? t.length - 1 : 0)
    setEdit(false)
  }

  const updateTitle = (newTitle) => {
    taskList[currentTask].title = newTitle
    setTaskList([...taskList])
  }

  const closeModule = () => {
    setEdit(false)
  }

  return (
    // <ToDoList date={new Date().toISOString().slice(0, 10)} />
    <div className="appContainer">
      {(edit)
        ? <div className="editModule"><EditModule task={taskList[currentTask]} updateTitle={updateTitle} deleteTask={deleteTask} closeModule={closeModule} onBlur={closeModule} /></div>
        : null
      }
      <div className={(edit) ? 'dim' : null} onClick={(edit) ? () => setEdit(false) : null}>
        <form onSubmit={addTask}>
          <div>
            <div>
              <input type="text" label="title" name="taskTitle" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
              <input type="submit" value="Add Task" />
            </div>
          </div>
        </form>
        {(taskList.length) ? <button onClick={editCurrentTask}>Edit Current Task</button> : null}
        <div>
          <ListContainer callbackParent={onSelectedTitleChanged} taskList={taskList} currentTask={currentTask} />
          <TaskContainer callbackParent={onUpdateTodo} task={taskList[currentTask]} />
        </div>
      </div>
    </div>
  )
}

export default App
