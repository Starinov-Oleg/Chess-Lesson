import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
