import React from 'react'
import { Key, ReactChild, ReactFragment, ReactPortal, SetStateAction, useState } from 'react'
import { RootStateOrAny,useSelector } from 'react-redux'

import Button from '../../ui-library/button-click/button'
import Square from '../square/square'
import boardcss from './board.module.css'

function start(setShowButton: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }) {
  setShowButton(false)
}

function handleClick(value: any) {
  alert(value)
}

function Board() {
  const button = { position: 'absolute', top: '70%', left: '45%' }
  const [showButton, setShowButton] = useState(true)

  const board = useSelector((state: RootStateOrAny) => state.board)
  const piece = useSelector((state: RootStateOrAny) => state.piece)

  const eventsItems6 = board
    .slice(16, 24)
    .map((square: { key: any; id: string; style: Object }) => (
      <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />
    ))
  const eventsItems5 = board
    .slice(24, 32)
    .map((square: { key: any; id: string; style: Object }) => (
      <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />
    ))
  const eventsItems4 = board
    .slice(32, 40)
    .map((square: { key: any; id: string; style: Object }) => (
      <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />
    ))
  const eventsItems3 = board
    .slice(40, 48)
    .map((square: { key: any; id: string; style: Object }) => (
      <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />
    ))

  return (
    <section className='board'>
      <div className={boardcss.board}>
        {showButton ? (
          <Button
            message='START'
            style={button}
            onClick={() => {
              start(setShowButton)
            }}
          />
        ) : null}
        <table className={boardcss.chess_board}>
          <tbody>
            <tr>
              <th></th>
              <th>a</th>
              <th>b</th>
              <th>c</th>
              <th>d</th>
              <th>e</th>
              <th>f</th>
              <th>g</th>
              <th>h</th>
            </tr>
            <tr>
              <th>8</th>

              {board
                .filter((u: { key: string }) => u.key === 'a8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BR')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}

              {board
                .filter((u: { key: string }) => u.key === 'b8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BN')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'c8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BB')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'd8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BQ')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'e8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BK')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'f8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BB2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'g8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BN2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'h8')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BR2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
            </tr>
            <tr>
              <th>7</th>
              {board
                .filter((u: { key: string }) => u.key === 'a7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'b7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP1')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'c7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'd7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP3')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'e7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP4')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'f7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP5')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'g7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP6')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'h7')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'BP7')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
            </tr>
            <tr>
              <th>3</th>
              {eventsItems6}
            </tr>
            <tr>
              <th>4</th>
              {eventsItems5}
            </tr>
            <tr>
              <th>5</th>
              {eventsItems4}
            </tr>
            <tr>
              <th>6</th>
              {eventsItems3}
            </tr>
            <tr>
              <th>2</th>
              {board
                .filter((u: { key: string }) => u.key === 'a2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'b2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP1')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'c2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'd2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP3')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'e2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP4')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'f2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP5')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'g2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP6')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'h2')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WP7')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}
            </tr>
            <tr>
              <th>1</th>
              {board
                .filter((u: { key: string }) => u.key === 'a1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WR')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <div key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </div>
                        )
                      )}
                  />
                ))}

              {board
                .filter((u: { key: string }) => u.key === 'b1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WN')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'c1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WB')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'd1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WQ')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'e1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WK')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'f1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WB2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'g1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WN2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
              {board
                .filter((u: { key: string }) => u.key === 'h1')
                .map((square: { key: string; style: Object }) => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter((u: { key: string }) => u.key === 'WR2')
                      .map(
                        (piece: {
                          key: Key | null | undefined
                          piece: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                        }) => (
                          <span key={piece.key} className={boardcss.svg}>
                            {piece.piece}
                          </span>
                        )
                      )}
                  />
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Board

/** EXAMPLE ROW DISPLAY
 * const eventsItems2 = board
    .slice(48, 56)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)

 <tr>
    <th>2</th>
      {eventsItems8}
  </tr>

 */
