import h1 from './h1.module.css'

function Title(props) {
  return <h1 className={`${h1.title} ${h1.color}`}>{props.message}</h1>
}

export default Title
