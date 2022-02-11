import item from './events-item.module.css'
import H3 from '../../../ui-library/h3/h3'
function Item(props) {
  const events = props.events.map(event => (
    <div key={event.id} className={item.id}>
      <H3 message={event.title} />
      <hr />
      <p>{event.text}</p>
      <span>{event.data}</span>
    </div>
  ))
  return <div className={item.item}>{events}</div>
}

export default Item
