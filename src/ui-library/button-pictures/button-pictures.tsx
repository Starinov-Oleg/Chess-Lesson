import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonProps {
  href?: any
  message?: string
  img: string
  width: string
  height: string
  style?: { [key: string]: string }
  button_click_link?: boolean
  onClick?: any
  disabled?: any
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
const StyledButtonClickPictures = styled.button<{ img: string; width: string; height: string }>`
  background-image: url(${props => props.img});
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`
function Button({ href, message, img, width, height, style, button_click_link, onClick, disabled }: ButtonProps) {
  return (
    <>
      {button_click_link ? (
        <StyledButtonClickPictures
          onClick={onClick}
          img={img}
          width={width}
          height={height}
          style={style}
          disabled={disabled}>
          {message}
        </StyledButtonClickPictures>
      ) : (
        <StyledButtonPictures to={href} img={img} width={width} height={height} style={style} onClick={onClick}>
          {message}
        </StyledButtonPictures>
      )}
    </>
  )
}

export default Button
