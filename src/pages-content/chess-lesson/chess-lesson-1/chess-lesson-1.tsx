import Button from '../../../ui-library/button-link/button-link'
import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Board from './chess-lesson-1-board-practice/board'
import { observe } from './chess-lesson-1-board-practice/game'
function ChessLesson1() {
  const [knightPosition, setKnightPosition] = useState([0, 0])
  // the observe function will return an unsubscribe callback
  useEffect(() => observe((newPosition: any) => setKnightPosition(newPosition)))
  return (
    <Container>
      <Row className='row'>
        <Col lg={8} xs={12}>
          <div>Practive move piece</div>
          <div>Description</div>

          <Board knightPosition={knightPosition} />
        </Col>
        <Col lg={4} xs={12}>
          <Button message='Next>>' href='cheslesson1practice' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLesson1
