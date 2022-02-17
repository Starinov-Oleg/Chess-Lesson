import play from './play.module.css'
import ChessBoard from '../../chess-board-game/chess-board'
import PlayClockTimer from './play-clock-timer/play-clock-timer'
import PlayProfile from './play-user-profile/play-user-profile'
import DiedChess from './play-count-died-chess/play-count-died-chess'

function Play(props) {
  return (
    <section className='play'>
      <div className={play.play}>
        <div className='row'>
          <div className='col-md-7 col-12'>
            <PlayProfile name={props.chessplay.name_rival} />
          </div>
          <div className='col-md-2 col-12'>
            <PlayClockTimer />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <ChessBoard />
          </div>
          <div className='col-md-4 col-12'>
            <DiedChess name={props.chessplay.name_rival} />
            <DiedChess name={props.chessplay.name_you} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-7 col-12'>
            <PlayProfile name={props.chessplay.name_you} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Play
