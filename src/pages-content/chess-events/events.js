import eventsitems from './events.module.css'
import Item from './events/events-item'
import { useSelector } from 'react-redux'

function Events() {
  const events = useSelector(state => state.events)
  const eventsItems = events.map(event => (
    <Item title={event.title} text={event.text} data={event.data} key={event.id} />
  ))
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
