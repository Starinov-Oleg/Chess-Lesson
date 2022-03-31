//import chesslesson from './chess-lesson.module.css'
import H1 from '../../ui-library/h1/h1'
import ChessLessonItem from './chess-lesson-item/chess-lesson-item'
function ChessLesson() {
  const style_h1 = { color: '#2aa3d3' }
  return (
    <div className='container'>
      <H1 message='Lesson' style={style_h1} />
      <ChessLessonItem />
    </div>
  )
}
export default ChessLesson
