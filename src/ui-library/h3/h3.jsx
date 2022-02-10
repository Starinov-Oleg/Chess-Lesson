import h3 from './h3.module.css'

function H3(props) {
  return <h1 className={`${h3.title} ${h3.color}`}>{props.message}</h1>
}

export default H3
