import React from 'react'
import buttonlogin from './button-login.module.css'
import { NavLink } from 'react-router-dom'

interface ButtonLogingProps {
  message: string
}
function ButtonLogin({ message }: ButtonLogingProps) {
  return (
    <NavLink to={'/Login'} className={buttonlogin.button}>
      {message}
    </NavLink>
  )
}

export default ButtonLogin
