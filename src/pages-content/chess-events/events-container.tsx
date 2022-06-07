import { Key } from 'react'
import { RootStateOrAny,useSelector } from 'react-redux'

import Events from './events'
import Item from './events/events-item'
function EventsContainer() {
  const events = useSelector((state: RootStateOrAny) => state.events)
  const eventsItems = events.map((event: { title: string; text: string; data: string; id: Key | null | undefined }) => (
    <Item title={event.title} text={event.text} data={event.data} key={event.id} />
  ))
  return <Events eventsItems={eventsItems} />
}
export default EventsContainer
