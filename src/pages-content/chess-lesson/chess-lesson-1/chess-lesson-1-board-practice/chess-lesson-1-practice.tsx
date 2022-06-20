import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import { PaddingTop } from '../../../../common/styled-components/padding-margin.styled'
import Button from '../../../../ui-library/button-link/button-link'
import H3 from '../../../../ui-library/h3/h3'
import Board from './board'
import { observe } from './game'

const StyledChessLesson = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`
function ChessLesson1() {
  const [knightPosition, setKnightPosition] = useState([0, 0])
  useEffect(() => observe((newPosition: Array<number>) => setKnightPosition(newPosition)))
  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          <PaddingTop>
            <H3 message='Practive move piece' primary />
          </PaddingTop>
          <div>Description</div>
          <StyledChessLesson>
            <Button message='Back<<' href='chesslesson1' />
            <Button message='Next>>' href='/chesslesson/chesslesson1/cheslesson1test' />
          </StyledChessLesson>
          <Board knightPosition={knightPosition} />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLesson1
