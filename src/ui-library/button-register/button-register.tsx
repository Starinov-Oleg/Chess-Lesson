import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  message: string
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
  margin: 20px;
  width: 16rem;
  box-shadow: 0px 0px 0px 0px #141112;
  background-color: #4d4444;
  border: 1px solid #8f8f8f;
  text-shadow: 0px 1px 0px #0a0406;

  &:hover {
    background-color: #858284;
    color: white;
  }
  &:active {
    position: relative;
    top: 1px;
    color: white;
  }
`
function Button({ message }: ButtonProps) {
  return <StyledButton to={'/Register'}>{message}</StyledButton>
}

export default Button
