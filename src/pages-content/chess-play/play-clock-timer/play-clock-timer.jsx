import playtimer from './play-clock-timer.module.css'

function PlayClockTimer() {
  return (
    <section className='PlayClockTimer'>
      <div className={playtimer.playtimer}>
        <span className={playtimer.font}>10:00</span>
      </div>
    </section>
  )
}
export default PlayClockTimer
