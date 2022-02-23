import coachesblock from './coaches-block.module.css'
import H3 from '../../../ui-library/h3/h3'
function CoachBlock(props) {
  return (
    <div className={coachesblock.coachesblock}>
      <H3 message={props.message} />
      <div className={coachesblock.body}>
        <p>{props.textMessage}</p>
      </div>
    </div>
  )
}

export default CoachBlock
