import h3 from './h3.module.css'

function H3(props) {
  return (
    <h3 className={`${h3.title} ${h3.color}`} style={props.style}>
      {props.message}
    </h3>
  )
}

export default H3
