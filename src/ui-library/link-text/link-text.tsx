import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonProps {
  href: string
  message: string
  style?: Object
}
const StyledLinkText = styled(NavLink)`
  font-family: 'Mochiy';
  color: #cecfcf;
  font-size: 1rem;
`
function LinkText({ href, message, style }: ButtonProps) {
  return (
    <StyledLinkText to={href} style={style}>
      {message}
    </StyledLinkText>
  )
}

export default LinkText
