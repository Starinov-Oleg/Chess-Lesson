import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  style?: { [key: string]: string }
  message: string
  title?: string
  onClick?: any
  children?: React.ReactNode
  type?: any
  disabled?: any
}

const StyledButton = styled.button`
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Mochiy';
  padding: 10px;
  text-decoration: none;
  box-shadow: 0px 0px 0px 0px #c25e1b;
  background-color: #ff6b08;
  border: 1px solid #f2bd9f;
  text-shadow: 0px 1px 0px #662828;
  @media (max-width: 982px) {
    padding: 4% 16%;
    width: auto;
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
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`

function Button({ onClick, style, message, title, children, type, disabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} style={style} title={title} type={type} disabled={disabled}>
      {message}
      {children}
    </StyledButton>
  )
}

export default Button
