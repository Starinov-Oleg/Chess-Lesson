import button from './button-link.module.css'
import { NavLink } from 'react-router-dom'

function Button({ href, message }) {
  return (
    <NavLink to={href} className={button.button}>
      {message}
    </NavLink>
  )
}

export default Button
