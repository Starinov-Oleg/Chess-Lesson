import boardcss from './board.module.css'
import Button from '../../ui-library/button-click/button'
import { useState } from 'react'
import Square from '../square/square'
import { useSelector } from 'react-redux'

function start(setShowButton) {
  setShowButton(false)
}
function handleClick(value) {
  alert(value)
}

function Board() {
  const button = { position: 'absolute', top: '70%', left: '45%' }
  const [showButton, setShowButton] = useState(true)

  const board = useSelector(state => state.board)
  const piece = useSelector(state => state.piece)

  const eventsItems6 = board
    .slice(16, 24)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)
  const eventsItems5 = board
    .slice(24, 32)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)
  const eventsItems4 = board
    .slice(32, 40)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)
  const eventsItems3 = board
    .slice(40, 48)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)

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
                .filter(u => u.key === 'a8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BR')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}

              {board
                .filter(u => u.key === 'b8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BN')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'c8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BB')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'd8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BQ')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'e8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BK')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'f8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BB2')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'g8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BN2')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'h8')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BR2')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
            </tr>
            <tr>
              <th>7</th>
              {board
                .filter(u => u.key === 'a7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'b7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP1')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'c7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP2')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'd7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP3')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'e7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP4')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'f7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP5')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'g7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP6')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'h7')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'BP7')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
            </tr>
            <tr>
              <th>6</th>
              {eventsItems6}
            </tr>
            <tr>
              <th>5</th>
              {eventsItems5}
            </tr>
            <tr>
              <th>4</th>
              {eventsItems4}
            </tr>
            <tr>
              <th>3</th>
              {eventsItems3}
            </tr>
            <tr>
              <th>2</th>
              {board
                .filter(u => u.key === 'a2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'b2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP1')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'c2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP2')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'd2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP3')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'e2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP4')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'f2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP5')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'g2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP6')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'h2')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WP7')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}
            </tr>
            <tr>
              <th>1</th>
              {board
                .filter(u => u.key === 'a1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WR')
                      .map(piece => (
                        <div key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </div>
                      ))}
                  />
                ))}

              {board
                .filter(u => u.key === 'b1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WN')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'c1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WB')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'd1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WQ')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'e1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WK')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'f1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WB2')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'g1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WN2')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
                  />
                ))}
              {board
                .filter(u => u.key === 'h1')
                .map(square => (
                  <Square
                    onClick={() => handleClick(square.key)}
                    key={square.key}
                    style={square.style}
                    value={piece
                      .filter(u => u.key === 'WR2')
                      .map(piece => (
                        <span key={piece.key} className={boardcss.svg}>
                          {piece.piece}
                        </span>
                      ))}
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
