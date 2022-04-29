import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  href: string
  message: string
  style?: Object
}

const StyledButton = styled(NavLink)`
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Mochiy';
  font-size: 28px;
  padding: 10px 50px;
  text-decoration: none;
  box-shadow: 0px 0px 0px 0px #c25e1b;
  background-color: #ff6b08;
  border: 1px solid #f2bd9f;
  text-shadow: 0px 1px 0px #662828;
  @media (max-width: 1693px) {
    width: auto;
    padding: 10px 12px;
    font-size: 20px;
  }
  &:hover {
    background-color: #f2bd9f;
    color: white;
  }
  &:active {
    position: relative;
    top: 1px;
    color: white;
  }
`
function Button({ href, message, style }: ButtonProps) {
  return (
    <StyledButton to={href} style={style}>
      {message}
    </StyledButton>
  )
}

export default Button
