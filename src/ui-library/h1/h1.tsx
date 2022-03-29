import h1 from './h1.module.css'

interface H1Props {
  message: string
  style?: Object
}
function Title({ message, style }: H1Props) {
  return (
    <h1 className={`${h1.title} ${h1.color}`} style={style}>
      {message}
    </h1>
  )
}

export default Title
