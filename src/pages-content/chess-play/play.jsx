import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

import ChessBoard from '../../chess-board-game/chess-board'
import HomeLink from '../../ui-library/home-link/home-link'
import PlayClockTimer from './play-clock-timer/play-clock-timer'
import DiedChess from './play-count-died-chess/play-count-died-chess'
import PlayProfile from './play-user-profile/play-user-profile'

//import Game from '../../chess-game/game/game'
function Play(chessplay) {
  return (
    <section className='play'>
      <Container fluid>
        <Row>
          <Col md={2} xs={12}>
            <PlayProfile name={chessplay.name_rival} />
          </Col>
          <Col md={8} xs={12}>
            <ChessBoard />
          </Col>
          <Col md={2} xs={12}>
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
