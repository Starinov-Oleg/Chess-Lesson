import chesscoaches from './chess-land-coaches.module.css'
import Button from '../../ui-library/button-link/button-link'
import logo from '../../assets/user/login.jpg'
import H3 from '../../ui-library/h3/h3'
function ChessLandCoaches() {
  const style_h3 = { fontSize: '1.5rem', padding: '1rem 1rem', color: 'black' }
  return (
    <section className='chesscoaches'>
      <div className={chesscoaches.chesscoaches}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <H3 message='Chess Land for coaches and parents' />
            <div className={chesscoaches.body}>
              <p>Here text about couching</p>
            </div>
            <H3 message='Coaches answer on question' />
            <div className={chesscoaches.body}>
              <p>Here text about couching</p>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className={chesscoaches.start}>
              <H3 message='Become a Member of the Chess Land' style={style_h3} />
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
