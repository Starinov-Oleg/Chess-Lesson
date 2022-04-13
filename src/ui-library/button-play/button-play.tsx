import React from 'react'
import styled from 'styled-components'
import img from '../../assets/section-baner/play.png'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  href: string
  message?: string
}
const StyledButtonPlay = styled(NavLink)`
  background-image: url(${img});
  padding: 40px;
  border-radius: 10px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  display: block;
`
function Button({ href, message }: ButtonProps) {
  return <StyledButtonPlay to={href}>{message}</StyledButtonPlay>
}

export default Button
