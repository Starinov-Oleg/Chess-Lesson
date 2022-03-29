import button from './button-link.module.css'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  href: string
  message: string
  style?: Object
}

function Button({ href, message, style }: ButtonProps) {
  return (
    <NavLink to={href} className={button.button} style={style}>
      {message}
    </NavLink>
  )
}

export default Button
