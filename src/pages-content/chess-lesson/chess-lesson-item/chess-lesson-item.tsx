import chesslessonitem from './chess-lesson-item.module.css'
import H3 from '../../../ui-library/h3/h3'
function ChessLessonItem() {
  return (
    <div className={chesslessonitem.chesslessonitem}>
      <div className={chesslessonitem.courseitem}>
        <a href='https://www.chess.com/lessons/how-to-move-the-pieces' className={chesslessonitem.link}>
          <div className={chesslessonitem.courseimage}>
            <img
              className={chesslessonitem.img}
              src='https://images.chesscomfiles.com/uploads/v1/lesson_course/8ba0f4de-6e57-11e8-b3b5-4bc0b74cd42e.26fa16e1.320x180o.b4244f444c1b.png'
              alt='How to Move the Pieces'
            />
          </div>
          <div className={chesslessonitem.content}>
            <div className={chesslessonitem.info}>
              <H3 message='How to Move the Pieces' />
              <p className={chesslessonitem.desc}>Get to know the chess pieces and how to set up the board.</p>
              <div className={chesslessonitem.author}>ChessLand Team</div>
            </div>
            <div className={chesslessonitem.moreinfo}>
              <div className={chesslessonitem.lessoninfo}>
                <span className={chesslessonitem.span}>8 Lessons</span>
                <span className={chesslessonitem.span}> Beginner</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
export default ChessLessonItem
