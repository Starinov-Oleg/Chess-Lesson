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

  const eventsItems8 = board
    .slice(0, 8)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)
  const eventsItems7 = board
    .slice(8, 16)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)
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
  const eventsItems2 = board
    .slice(48, 56)
    .map(square => <Square onClick={() => handleClick(square.key)} key={square.id} style={square.style} />)
  const eventsItems1 = board
    .slice(56, 64)
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
              {eventsItems1}
            </tr>
            <tr>
              <th>7</th>
              {eventsItems2}
            </tr>
            <tr>
              <th>6</th>
              {eventsItems3}
            </tr>
            <tr>
              <th>5</th>
              {eventsItems4}
            </tr>
            <tr>
              <th>4</th>
              {eventsItems5}
            </tr>
            <tr>
              <th>3</th>
              {eventsItems6}
            </tr>
            <tr>
              <th>2</th>
              {eventsItems7}
            </tr>
            <tr>
              <th>1</th>
              {eventsItems8}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Board
