import coachesblock from './coaches-block.module.css'
import H3 from '../../../ui-library/h3/h3'
function CoachBlock({ message, textMessage }) {
  return (
    <div className={coachesblock.coachesblock}>
      <H3 message={message} />
      <div className={coachesblock.body}>
        <p>{textMessage}</p>
      </div>
    </div>
  )
}

export default CoachBlock
