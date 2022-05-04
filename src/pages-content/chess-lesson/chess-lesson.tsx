
import H1 from '../../ui-library/h1/h1'
import ChessLessonItem from './chess-lesson-item/chess-lesson-item'
function ChessLesson() {
  const ChessItemLesson = [
    {
      href: 'chesslesson1',
      title: 'How to Move the Pieces',
      text: 'Get to know the chess pieces and how to set up the board.',
      author: 'ChessLand Team',
      lessons: '8 Lessons',
      level: 'Beginner',
    },
  ]
  return (
    <div className='container'>
      <H1 message='Lesson' primary />
      {ChessItemLesson.map((item, index) => (
        <ChessLessonItem
          href={item.href}
          title={item.title}
          text={item.text}
          author={item.author}
          lessons={item.lessons}
          level={item.level}
          key={index}
        />
      ))}
    </div>
  )
}
export default ChessLesson
