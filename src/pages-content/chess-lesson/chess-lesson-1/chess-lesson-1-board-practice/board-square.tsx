import React, { ReactNode } from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from './constants/ItemTypes'
import { canMoveKnight,moveKnight } from './game'
import Square from './square'
export interface BoardSquareProps {
  x: number
  y: number
  children?: ReactNode
}
export default function BoardSquare({ x, y, children }: BoardSquareProps) {
  const black = (x + y) % 2 === 1
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      canDrop: () => canMoveKnight(x, y),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  )
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'red',
          }}
        />
      )}
      {!isOver && canDrop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
      {isOver && canDrop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'green',
          }}
        />
      )}
    </div>
  )
}
