import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
interface ButtonLogingProps {
  message: string
}
const StyledButtonLogin = styled.button`
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
  margin: 20px;
  width: 16rem;
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
function ButtonLoginAuth({ message }: ButtonLogingProps) {
  const { loginWithRedirect } = useAuth0()
  return <StyledButtonLogin onClick={() => loginWithRedirect()}>{message}</StyledButtonLogin>
}

export default ButtonLoginAuth
