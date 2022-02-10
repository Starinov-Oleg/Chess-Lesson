import item from './events-item.module.css'

function Item(props) {
  return (
    <div className={item.item}>
      <h3 className={item.subtitle}>{props.title}</h3>
      <p>{props.body}</p>
      <span>{props.data}</span>
    </div>
  )
}

export default Item
