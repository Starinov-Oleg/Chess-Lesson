import React from 'react'
import styled, { css } from 'styled-components'
interface H3Props {
  style?: { [key: string]: string }
  message: string
  primary?: boolean | string
  colorBlack?: boolean | string
  colorNote?: boolean | string
  textAlignLeft?: boolean | string
  colorOrange?: boolean | string
}
interface StyledH3Props {
  primary?: boolean | string
  colorBlack?: boolean | string
  colorNote?: boolean | string
  colorOrange?: boolean | string
  textAlignLeft?: boolean | string
}
const StyledH3 = styled.h3<StyledH3Props>`
  font-size: 1.5rem;
  padding-bottom: 2rem;
  font-family: 'Mochiy';
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
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
      color: var(--global-var-color-blue);
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
`

function H3({ style, message, primary, colorBlack, colorNote, colorOrange, textAlignLeft }: H3Props) {
  return (
    <StyledH3
      style={style}
      primary={primary}
      colorBlack={colorBlack}
      colorNote={colorNote}
      colorOrange={colorOrange}
      textAlignLeft={textAlignLeft}>
      {message}
    </StyledH3>
  )
}

export default H3
