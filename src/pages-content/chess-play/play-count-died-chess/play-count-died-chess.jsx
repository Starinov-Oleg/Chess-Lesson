import diedchess from './play-count-died-chess.module.css'
import H3 from '../../../ui-library/h3/h3'
function DiedChess(props) {
  return (
    <section>
      <div className={diedchess.diedchess}>
        <H3 message='Died Chess' />
        <span className={diedchess.color}>{props.name}</span>:
        <hr className={diedchess.line} />
      </div>
    </section>
  )
}
export default DiedChess
