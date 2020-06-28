import React from 'react'
import List from './taskList'
import PropTypes from 'prop-types'
import styles from '../style/style.css' // eslint-disable-line no-unused-vars

const ListContainer = props => {
  console.log('ListContainer: props ', props)
  return (
    <div className="listContainer">
      <List callbackParent={props.callbackParent} taskList={props.taskList} currentTask={props.currentTask} />
    </div>
  )
}

ListContainer.propTypes = {
  taskList: PropTypes.any,
  currentTask: PropTypes.any,
  callbackParent: PropTypes.any
}

export default ListContainer
