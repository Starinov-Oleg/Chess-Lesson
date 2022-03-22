import gamestyle from './game.module.css'
import Board from '../board/board'
function Game() {
  return (
    <div className={`container ${gamestyle.game}`}>
      <div className={gamestyle.gameBoard}>
        <Board />
      </div>
      <div className={gamestyle.gameInfo}></div>
    </div>
  )
}

export default Game
