import React from 'react'
import styled, { css } from 'styled-components'
interface H3Props {
  style?: { [key: string]: string }
  message: string
  primary?: boolean | string
  colorBlack?: boolean | string
  colorNote?: boolean | string
  textAlignLeft?: boolean | string
  fontSize1rem?: boolean | string
  colorOrange?: boolean | string
}
interface StyledH3Props {
  primary?: boolean | string
  colorBlack?: boolean | string
  colorNote?: boolean | string
  colorOrange?: boolean | string
  textAlignLeft?: boolean | string
  fontSize1rem?: boolean | string
}
const StyledH3 = styled.h3<StyledH3Props>`
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
    ${props =>
    props.fontSize1rem &&
    css`
      font-size: var(--global-var-font-size-1rem);
    `};
`

function H3({ style, message, primary, colorBlack, colorNote, colorOrange, textAlignLeft, fontSize1rem }: H3Props) {
  return (
    <StyledH3
      style={style}
      primary={primary}
      colorBlack={colorBlack}
      colorNote={colorNote}
      colorOrange={colorOrange}
      textAlignLeft={textAlignLeft}
      fontSize1rem={fontSize1rem}>
      {message}
    </StyledH3>
  )
}

export default H3
