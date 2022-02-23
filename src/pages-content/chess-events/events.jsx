import eventsitems from './events.module.css'

function Events({ eventsItems }) {
  return (
    <section className='events'>
      <div className={eventsitems.events}>
        <div className='row'>
          <div className='col-md-12 col-12'>{eventsItems}</div>
        </div>
      </div>
    </section>
  )
}
export default Events
