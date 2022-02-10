import events from './events.module.css'
import Item from './events/events-item'
import value from '../../backend/value'
function Events() {
  return (
    <section className='events'>
      <div className={events.events}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <Item title={value.events[0].title} body={value.events[0].text} data={value.events[0].data} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Events
