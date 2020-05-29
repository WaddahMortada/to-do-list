import React from 'react'
import TaskContent from './taskContent'
// eslint-disable-next-line no-unused-vars
import styles from '../style/style.css'
import { Col, Card } from 'react-bootstrap'

function ContentBox (props) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <TaskContent />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ContentBox
