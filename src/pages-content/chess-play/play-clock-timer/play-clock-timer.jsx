import playtimer from './play-clock-timer.module.css'

function PlayClockTimer() {
  return (
    <section className='PlayClockTimer'>
      <div className={playtimer.playtimer}>
        <h3 className={`${playtimer.font} ${playtimer.color}`}>Timer:</h3>
        <span className={playtimer.font}>10:00</span>
      </div>
    </section>
  )
}
export default PlayClockTimer
