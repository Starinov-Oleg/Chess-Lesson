import React from 'react'
import playtimer from './play-clock-timer.module.css'
import H3 from '../../../ui-library/h3/h3'
function PlayClockTimer() {
  return (
    <section className='PlayClockTimer'>
      <div className={playtimer.playtimer}>
        <H3 message='Timer:' />
        <span className={playtimer.font}>10:00</span>
      </div>
    </section>
  )
}
export default PlayClockTimer
