//import chesslesson from './chess-lesson.module.css'
import H1 from '../../ui-library/h1/h1'
import ChessLessonItem from './chess-lesson-item/chess-lesson-item'
import '../../common/vars-css.css'
function ChessLesson() {
  const style_h1 = { color: '#var(--global-var-color-blue)' }
  return (
    <div className='container'>
      <H1 message='Lesson' style={style_h1} />
      <ChessLessonItem href='chesslesson/1' />
    </div>
  )
}
export default ChessLesson
