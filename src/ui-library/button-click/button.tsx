import button from './button.module.css'

interface ButtonProps {
  style?: Object
  message: string
  onClick?: () => void
}
function Button({ onClick, style, message }: ButtonProps) {
  return (
    <button className={button.button} onClick={onClick} style={style}>
      {message}
    </button>
  )
}

export default Button
