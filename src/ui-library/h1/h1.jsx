import h1 from './h1.module.css'

function Title({ message, style }) {
  return (
    <h1 className={`${h1.title} ${h1.color}`} style={style}>
      {message}
    </h1>
  )
}

export default Title
