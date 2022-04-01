import Button from '../../../ui-library/button-link/button-link'
import chesslesson1 from './chess-lesson-1.module.css'
function ChessLesson1() {
  return (
    <div className={chesslesson1.programmexampleitem}>
      <div className='row'>
        <div col-lg-8 col-12>
          <div className={chesslesson1.board}></div>
          <div className={chesslesson1.description}></div>
        </div>
        <div col-lg-4 col-12>
          <Button message='Next>>' href='/' />
        </div>
      </div>
    </div>
  )
}

export default ChessLesson1
