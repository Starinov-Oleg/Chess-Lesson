import Button from '../../../../ui-library/button-link/button-link'
import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Board from './board'
import { observe } from './game'
import styled from 'styled-components'

const StyledChessLesson = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`
function ChessLesson1() {
  const [knightPosition, setKnightPosition] = useState([0, 0])
  useEffect(() => observe((newPosition: any) => setKnightPosition(newPosition)))
  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          <div>Practive move piece</div>
          <div>Description</div>
          <StyledChessLesson>
            <Button message='Back<<' href='/chesslesson/chesslesson1' />
            <Button message='Next>>' href='#' />
          </StyledChessLesson>
          <Board knightPosition={knightPosition} />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLesson1
