//import chesslesson from './chess-lesson.module.css'
import H1 from '../../ui-library/h1/h1'
import ChessLessonItem from './chess-lesson-item/chess-lesson-item'
import '../../common/vars-css.css'
function ChessLesson() {
  return (
    <div className='container'>
      <H1 message='Lesson' primary />
      <ChessLessonItem href='chesslesson/1' />
    </div>
  )
}
export default ChessLesson
