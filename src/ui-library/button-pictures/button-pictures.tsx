import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonProps {
  href: string
  message?: string
  img: string
  width: string
  height: string
  style?: { [key: string]: string }
}
const StyledButtonPictures = styled(NavLink)<{ img: string; width: string; height: string }>`
  background-image: url(${props => props.img});
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`
function Button({ href, message, img, width, height, style }: ButtonProps) {
  return (
    <StyledButtonPictures to={href} img={img} width={width} height={height} style={style}>
      {message}
    </StyledButtonPictures>
  )
}

export default Button
