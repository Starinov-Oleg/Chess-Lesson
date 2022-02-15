import buttonlogin from './button-login.module.css'
import { NavLink } from 'react-router-dom'

function ButtonLogin(props) {
  return (
    <NavLink to={'/Login'} className={buttonlogin.button}>
      {props.message}
    </NavLink>
  )
}

export default ButtonLogin
