import buttonplay from './button-play.module.css'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  href: string
  message?: string
}
function Button({ href, message }: ButtonProps) {
  return (
    <NavLink to={href} className={buttonplay.play}>
      {message}
    </NavLink>
  )
}

export default Button
