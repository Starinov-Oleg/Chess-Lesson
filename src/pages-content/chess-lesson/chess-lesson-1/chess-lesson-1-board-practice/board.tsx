import React from 'react'
import Square from './square'
import Knight from './knight-piece'
import BoardSquare from './board-square'
interface BoardProps {
  knightPosition: any
}

export default function Board({ knightPosition }: BoardProps) {
  function renderSquare(i: any, knightPosition: any) {
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
  function renderPiece(x: number, y: number, [knightX, knightY]: any) {
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
