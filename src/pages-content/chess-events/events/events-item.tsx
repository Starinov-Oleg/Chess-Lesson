import item from './events-item.module.css'
import H3 from '../../../ui-library/h3/h3'

interface ItemProps {
  title: string
  text: string
  data: string
}
function Item(props: ItemProps) {
  return (
    <div className={item.id}>
      <H3 message={props.title} colorBlack />
      <hr />
      <p>{props.text}</p>
      <span>{props.data}</span>
    </div>
  )
}

export default Item
