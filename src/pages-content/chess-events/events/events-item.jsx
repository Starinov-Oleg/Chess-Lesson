import item from './events-item.module.css'
import H3 from '../../../ui-library/h3/h3'
function Item(props) {
  return (
    <div className={item.id}>
      <H3 message={props.title} />
      <hr />
      <p>{props.text}</p>
      <span>{props.data}</span>
    </div>
  )
}

export default Item
