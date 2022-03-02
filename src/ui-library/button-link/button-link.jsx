import button from './button-link.module.css'
import { NavLink } from 'react-router-dom'

function Button({ href, message, style }) {
  return (
    <NavLink to={href} className={button.button} style={style}>
      {message}
    </NavLink>
  )
}

export default Button
