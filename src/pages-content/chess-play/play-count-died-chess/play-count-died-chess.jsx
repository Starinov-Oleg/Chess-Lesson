import diedchess from './play-count-died-chess.module.css'

function DiedChess(props) {
  return (
    <section>
      <div className={diedchess.diedchess}>
        <h3 className={diedchess.subtitles}>
          Died Chess <span className={diedchess.color}>{props.name}</span>:
        </h3>
        <hr className={diedchess.line} />
      </div>
    </section>
  )
}
export default DiedChess
