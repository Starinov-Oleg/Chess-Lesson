import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
interface ButtonProps {
  message: string
}
const StyledButton = styled.button`
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
function ButtonRegisterAuth({ message }: ButtonProps) {
  const { loginWithRedirect } = useAuth0()
  return (
    <StyledButton
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }>
      {message}
    </StyledButton>
  )
}

export default ButtonRegisterAuth
