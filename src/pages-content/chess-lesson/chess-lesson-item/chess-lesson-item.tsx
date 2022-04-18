import chesslessonitem from './chess-lesson-item.module.css'
import H3 from '../../../ui-library/h3/h3'
import { NavLink } from 'react-router-dom'
interface ChessLessonItemProps {
  href: string
  title: string
  text: string
  author: string
  lessons: string
  level: string
}
function ChessLessonItem({ href, title, text, author, lessons, level }: ChessLessonItemProps) {
  return (
    <div className={chesslessonitem.chesslessonitem}>
      <div className={chesslessonitem.courseitem}>
        <NavLink to={href} className={chesslessonitem.link}>
          <div className={chesslessonitem.courseimage}>
            <img
              className={chesslessonitem.img}
              src='https://images.chesscomfiles.com/uploads/v1/lesson_course/8ba0f4de-6e57-11e8-b3b5-4bc0b74cd42e.26fa16e1.320x180o.b4244f444c1b.png'
              alt={title}
            />
          </div>
          <div className={chesslessonitem.content}>
            <div className={chesslessonitem.info}>
              <H3 message={title} primary />
              <p className={chesslessonitem.desc}>{text}</p>
              <div className={chesslessonitem.author}>{author}</div>
            </div>
            <div className={chesslessonitem.moreinfo}>
              <div className={chesslessonitem.lessoninfo}>
                <span className={chesslessonitem.span}>{lessons}</span>
                <span className={chesslessonitem.span}> {level}</span>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
export default ChessLessonItem
