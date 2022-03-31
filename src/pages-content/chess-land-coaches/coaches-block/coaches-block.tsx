import coachesblock from './coaches-block.module.css'
import H1 from '../../../ui-library/h1/h1'

interface CoachBlockProps {
  message: string
  textMessage: string
}
function CoachBlock({ message, textMessage }: CoachBlockProps) {
  const style_h1 = { color: '#2aa3d3' }
  return (
    <div className={coachesblock.coachesblock}>
      <H1 message={message} style={style_h1} />
      <div className={coachesblock.body}>
        <p>{textMessage}</p>
      </div>
    </div>
  )
}

export default CoachBlock
