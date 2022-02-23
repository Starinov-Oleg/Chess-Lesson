import buttonlogin from './button-register.module.css'
import { NavLink } from 'react-router-dom'

function Button({ message }) {
  return (
    <NavLink to={'/Register'} className={buttonlogin.button}>
      {message}
    </NavLink>
  )
}

export default Button
