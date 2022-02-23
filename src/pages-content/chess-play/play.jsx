import play from './play.module.css'
import ChessBoard from '../../chess-board-game/chess-board'
import PlayClockTimer from './play-clock-timer/play-clock-timer'
import PlayProfile from './play-user-profile/play-user-profile'
import DiedChess from './play-count-died-chess/play-count-died-chess'
import HomeLink from '../../ui-library/home-link/home-link'

function Play(chessplay, name_rival, name_you) {
  return (
    <section className='play'>
      <div className={play.play}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 col-12'>
              <PlayProfile name={chessplay.name_rival} />
              <PlayProfile name={chessplay.name_you} />
            </div>
            <div className='col-md-6 col-12'>
              <ChessBoard />
            </div>
            <div className={`col-md-3 col-12 ${play.margin_top}`}>
              <HomeLink />
              <PlayClockTimer />
              <DiedChess name={chessplay.name_rival} />
              <DiedChess name={chessplay.name_you} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Play
