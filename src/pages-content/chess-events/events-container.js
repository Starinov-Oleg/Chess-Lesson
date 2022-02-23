import Item from './events/events-item'
import { useSelector } from 'react-redux'
import Events from './events'
function EventsContainer() {
  const events = useSelector(state => state.events)
  const eventsItems = events.map(event => (
    <Item title={event.title} text={event.text} data={event.data} key={event.id} />
  ))
  return <Events eventsItems={eventsItems} />
}
export default EventsContainer
