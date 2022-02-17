import events from './events.module.css'
import Item from './events/events-item'

function Events(props) {
  const eventsItems = props.events.map(event => (
    <Item title={event.title} text={event.text} data={event.data} key={event.id} />
  ))
  return (
    <section className='events'>
      <div className={events.events}>
        <div className='row'>
          <div className='col-md-12 col-12'>{eventsItems}</div>
        </div>
      </div>
    </section>
  )
}
export default Events
