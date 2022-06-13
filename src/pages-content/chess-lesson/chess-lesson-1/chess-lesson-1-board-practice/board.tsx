import React from 'react'

import BoardSquare from './board-square'
import Knight from './knight-piece'

interface BoardProps {
  knightPosition: Array<number>
}

export default function Board({ knightPosition }: BoardProps) {
  function renderSquare(i: number, knightPosition: Array<number>) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={{ width: '12%', height: '50%' }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    )
  }
  function renderPiece(x: number, y: number, [knightX, knightY]: Array<number>) {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {squares}
    </div>
  )
}
