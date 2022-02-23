import h3 from './h3.module.css'

function H3({ style, message }) {
  return (
    <h3 className={`${h3.title} ${h3.color}`} style={style}>
      {message}
    </h3>
  )
}

export default H3
