import chesscoaches from './chess-land-coaches.module.css'
import Button from '../../ui-library/button-link/button-link'
import logo from '../../assets/user/login.jpg'
function ChessLandCoaches() {
  return (
    <section className='chesscoaches'>
      <div className={chesscoaches.chesscoaches}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <h3 className={`${chesscoaches.subtitles} ${chesscoaches.color}`}>Chess Land for coaches and parents</h3>
            <div className={chesscoaches.body}>
              <p>Here text about couching</p>
            </div>
            <h3 className={chesscoaches.subtitles}>Coaches answer on question</h3>
            <div className={chesscoaches.body}>
              <p>Here text about couching</p>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className={chesscoaches.start}>
              <h3 className={chesscoaches.subtitles}>Become a Member of the Chess Land</h3>
              <img src={logo} alt='club logo' className={chesscoaches.logo} />
              <Button message='JOIN FOR FREE' href='#' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChessLandCoaches
