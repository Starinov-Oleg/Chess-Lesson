import ul from './ul.module.css'

interface Props {
  style?: Object
  lists: Array<string>
}
function Ul(props: Props) {
  const lists = props.lists

  const listItems = lists.map(list => <li key={list.toString()}>{list}</li>)
  return (
    <ul className={`${ul.list}`} style={props.style}>
      {listItems}
    </ul>
  )
}

export default Ul
