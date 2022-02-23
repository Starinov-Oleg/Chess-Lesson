import button from './button.module.css'

function Button({ onClick, style, message }) {
  return (
    <button className={button.button} onClick={onClick} style={style}>
      {message}
    </button>
  )
}

export default Button
