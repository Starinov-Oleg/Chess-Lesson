import React from 'react'
import ChessBoard from '../../chess-board-game/chess-board'
import PlayClockTimer from './play-clock-timer/play-clock-timer'
import PlayProfile from './play-user-profile/play-user-profile'
import DiedChess from './play-count-died-chess/play-count-died-chess'
import HomeLink from '../../ui-library/home-link/home-link'
import { Col, Row, Container } from 'react-bootstrap'

//import Game from '../../chess-game/game/game'
function Play(chessplay) {
  return (
    <section className='play'>
      <Container fluid>
        <Row>
          <Col md={3} xs={12}>
            <PlayProfile name={chessplay.name_rival} />
          </Col>
          <Col md={6} xs={12}>
            <ChessBoard />
          </Col>
          <Col md={3} xs={12}>
            <HomeLink />
            <PlayClockTimer />
            <DiedChess name={chessplay.name_rival} />
            <DiedChess name={chessplay.name_you} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Play
