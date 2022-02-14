import buttonplay from './button-play.module.css'
import { NavLink } from 'react-router-dom'

function Button(props) {
  return (
    <div className={buttonplay.play}>
      <NavLink to={props.href}>{props.message}</NavLink>
    </div>
  )
}

export default Button
