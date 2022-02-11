import events from './events.module.css'
import Item from './events/events-item'
import value from '../../backend/value'
function Events() {
  return (
    <section className='events'>
      <div className={events.events}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <Item events={value.events} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Events
