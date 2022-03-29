import boardgame from './chess-board.module.css'
import Board from './board/board'
function ChessBoard() {
  return (
    <section className='board'>
      <div className={`${boardgame.background_color} ${boardgame.chess_board}`}>
        <Board />
      </div>
    </section>
  )
}
export default ChessBoard
