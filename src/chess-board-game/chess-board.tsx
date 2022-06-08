import { Chess } from 'chess.js'
import React from 'react'
import { useState } from 'react'
//import Board from './board/board'
import { Chessboard } from 'react-chessboard'
import styled from 'styled-components'

const StyledChessBoard = styled.div`
  background-color: #a4c8e7;
  display: flex;
  align-items: center;
  justify-content: center;
`

function ChessBoard() {
  const [game, setGame] = useState(new Chess())
  function safeGameMutate(modify: any) {
    setGame(g => {
      const update = { ...g }
      modify(update)
      return update
    })
  }
  function makeRandomMove() {
    const possibleMoves = game.moves()
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) return
    const randomIndex = Math.floor(Math.random() * possibleMoves.length)
    safeGameMutate((game: any) => {
      game.move(possibleMoves[randomIndex])
    })
  }
  function onDrop(sourceSquare: any, targetSquare: any) {
    let move = null
    safeGameMutate((game: any) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      })
    })
    if (move === null) return false
    setTimeout(makeRandomMove, 200)
    return true
  }

  return (
    <StyledChessBoard>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </StyledChessBoard>
  )
}
export default ChessBoard
