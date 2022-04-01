import linktext from './link-text.module.css'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  href: string
  message: string
  style?: Object
}

function LinkText({ href, message, style }: ButtonProps) {
  return (
    <NavLink to={href} className={linktext.linktext} style={style}>
      {message}
    </NavLink>
  )
}

export default LinkText
