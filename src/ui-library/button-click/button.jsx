import button from './button.module.css'

function Button(props) {
  return (
    <button className={button.button} onClick={props.onClick}>
      {props.message}
    </button>
  )
}

export default Button
