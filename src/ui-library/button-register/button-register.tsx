import React from 'react'
import buttonlogin from './button-register.module.css'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  message: string
}
function Button({ message }: ButtonProps) {
  return (
    <NavLink to={'/Register'} className={buttonlogin.button}>
      {message}
    </NavLink>
  )
}

export default Button
