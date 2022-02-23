import buttonplay from './button-play.module.css'
import { NavLink } from 'react-router-dom'

function Button({ href, message }) {
  return (
    <NavLink to={href} className={buttonplay.play}>
      {message}
    </NavLink>
  )
}

export default Button
