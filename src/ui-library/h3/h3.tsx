import React from 'react'
import h3 from './h3.module.css'
import styled, { css } from 'styled-components'
interface H3Props {
  style?: Object
  message: string
  primary?: any
  colorBlack?: any
  colorNote?: any
  textAlignLeft?: any
  fontSize1rem?: any
  colorOrange?: any
}
const StyledButton = styled.h3<{
  primary: boolean
  colorBlack: boolean
  colorNote: boolean
  colorOrange: boolean
  textAlignLeft: boolean
  fontSize1rem: boolean
}>`
  font-size: 1.5rem;
  padding-bottom: 2rem;
  font-family: 'Mochiy';
    ${props =>
      props.colorBlack &&
      css`
    color: black;
  `}
      ${props =>
        props.colorNote &&
        css`
    color: var(--global-var-color-note);
  `}
    ${props =>
      props.primary &&
      css`
    color: #2aa3d3;
  `}
   ${props =>
     props.colorOrange &&
     css`
    color: var(--global-var-color-orange);
  `}
      ${props =>
        props.textAlignLeft &&
        css`
    text-align: var(--global-var-align-left);
  `}
      ${props =>
        props.fontSize1rem &&
        css`
    font-size: var(--global-var-font-size-1rem);
  `}
`

function H3({ style, message, primary, colorBlack, colorNote, colorOrange, textAlignLeft, fontSize1rem }: H3Props) {
  return (
    <StyledButton
      style={style}
      primary={primary}
      colorBlack={colorBlack}
      colorNote={colorNote}
      colorOrange={colorOrange}
      textAlignLeft={textAlignLeft}
      fontSize1rem={fontSize1rem}>
      {message}
    </StyledButton>
  )
}

export default H3
