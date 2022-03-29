import Item from './events/events-item'
import { useSelector, RootStateOrAny } from 'react-redux'
import Events from './events'
import { Key } from 'react'
function EventsContainer() {
  const events = useSelector((state: RootStateOrAny) => state.events)
  const eventsItems = events.map((event: { title: string; text: string; data: string; id: Key | null | undefined }) => (
    <Item title={event.title} text={event.text} data={event.data} key={event.id} />
  ))
  return <Events eventsItems={eventsItems} />
}
export default EventsContainer
