import ul from './ul.module.css'

function Ul(props) {
  return (
    <ul className={ul.list}>
      <li>{props.li0}</li>
      <li>{props.li1}</li>
      <li>{props.li2}</li>
      <li>{props.li3}</li>
    </ul>
  )
}

export default Ul
