import React from 'react'
import PropTypes from 'prop-types'
import styles from '../style/style.css' // eslint-disable-line no-unused-vars

const ProgressBar = props => {
  console.log('PROGRESS BAR:', props.progress)
  return (
    <div id="progressBar">
      <div id="bar" style={{ width: props.progress + '%' }}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.any
}

export default ProgressBar
