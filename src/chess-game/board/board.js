import boardstyle from './board.module.css'
import Square from '../square/square'
import { useSelector } from 'react-redux'
function renderSquare(i) {
  return <Square value={i} />
}
function handleClick(value) {
  alert('Hi ' + value)
}
function Board() {
  const board = useSelector(state => state.board)

  return (
    <div className={`container ${boardstyle.board}`}>
      <div className={boardstyle.row}>
        {board
          .filter(u => u.id === 0)
          .map(square => (
            <Square key={square.id} style={square.style} onClick={() => handleClick(square.key)} />
          ))}
        {board
          .filter(u => u.id === 1)
          .map(square => (
            <Square key={square.id} style={square.style} onClick={() => handleClick(square.key)} />
          ))}

        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className={boardstyle.row}>
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
      </div>
      <div className={boardstyle.row}>
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
      </div>
      <div className={boardstyle.row}>
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
        {renderSquare(28)}
        {renderSquare(29)}
        {renderSquare(30)}
        {renderSquare(31)}
        {renderSquare(32)}
      </div>

      <div className={boardstyle.row}>
        {renderSquare(33)}
        {renderSquare(34)}
        {renderSquare(35)}
        {renderSquare(36)}
        {renderSquare(37)}
        {renderSquare(38)}
        {renderSquare(39)}
        {renderSquare(40)}
      </div>
      <div className={boardstyle.row}>
        {renderSquare(41)}
        {renderSquare(42)}
        {renderSquare(43)}
        {renderSquare(44)}
        {renderSquare(45)}
        {renderSquare(46)}
        {renderSquare(47)}
        {renderSquare(48)}
      </div>
      <div className={boardstyle.row}>
        {renderSquare(49)}
        {renderSquare(50)}
        {renderSquare(51)}
        {renderSquare(52)}
        {renderSquare(53)}
        {renderSquare(54)}
        {renderSquare(55)}
        {renderSquare(56)}
      </div>
      <div className={boardstyle.row}>
        {renderSquare(57)}
        {renderSquare(58)}
        {renderSquare(59)}
        {renderSquare(60)}
        {renderSquare(61)}
        {renderSquare(62)}
        {renderSquare(63)}
        {renderSquare(64)}
      </div>
    </div>
  )
}

export default Board
