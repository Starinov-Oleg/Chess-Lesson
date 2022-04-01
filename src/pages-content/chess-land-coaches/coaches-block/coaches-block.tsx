import coachesblock from './coaches-block.module.css'
import H1 from '../../../ui-library/h1/h1'
import '../../../common/vars-css.css'
interface CoachBlockProps {
  message: string
  textMessage: string
}
function CoachBlock({ message, textMessage }: CoachBlockProps) {
  const style_h1 = { color: 'var(--global-var-color-blue)' }
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
