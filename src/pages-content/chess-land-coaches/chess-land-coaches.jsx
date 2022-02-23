import chesscoaches from './chess-land-coaches.module.css'
import CoachBlock from './coaches-block/coaches-block'
import About from './coaches-about/coaches-about'

function ChessLandCoaches() {
  return (
    <section className='chesscoaches'>
      <div className={chesscoaches.chesscoaches}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <CoachBlock message='Chess Land for coaches and parents' textMessage='Here text about couching' />
            <CoachBlock message='Coaches answer on question' textMessage='Here text about couching' />
          </div>
          <div className='col-md-4 col-12'>
            <div className={chesscoaches.start}>
              <About message='Become a Member of the Chess Land' messagebutton='JOIN FOR FREE' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChessLandCoaches
