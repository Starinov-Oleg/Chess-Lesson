import buttonlogin from './button-register.module.css'
import { NavLink } from 'react-router-dom'

function Button(props) {
  return (
    <NavLink to={'/Register'} className={buttonlogin.button}>
      {props.message}
    </NavLink>
  )
}

export default Button
