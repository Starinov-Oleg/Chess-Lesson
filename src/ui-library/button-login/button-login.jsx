import buttonlogin from './button-login.module.css'
import { NavLink } from 'react-router-dom'

function ButtonLogin({ message }) {
  return (
    <NavLink to={'/Login'} className={buttonlogin.button}>
      {message}
    </NavLink>
  )
}

export default ButtonLogin
