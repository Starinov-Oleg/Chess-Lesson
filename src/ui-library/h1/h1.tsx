import React from 'react'
import styled, { css } from 'styled-components'
interface H1Props {
  message: string
  style?: { [key: string]: string }
  children?: React.ReactNode
  colorWhite?: boolean | string
  primary?: boolean | string
  goldTitle?: boolean | string
  colorOrange?: boolean | string
  colorBlack?: boolean | string
}
interface StyledH1Props {
  colorWhite?: boolean | string
  primary?: boolean | string
  goldTitle: boolean | string | undefined
  colorOrange?: boolean | string
  colorBlack?: boolean | string
}
const StyledH1 = styled.h1<StyledH1Props>`
  font-size: 2rem;
  padding-top: 2rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
  ${props =>
    props.colorWhite &&
    css`
      color: var(--global-var-color-white);
    `}
  ${props =>
    props.primary &&
    css`
      color: var(--global-var-color-blue);
    `}
   ${props =>
    props.goldTitle &&
    css`
      color: gold;
    `}
     ${props =>
    props.colorOrange &&
    css`
      color: var(--global-var-color-orange);
    `}
`
function H1({ message, style, colorWhite, primary, goldTitle, colorOrange, colorBlack, children }: H1Props) {
  return (
    <StyledH1
      style={style}
      colorWhite={colorWhite}
      primary={primary}
      goldTitle={goldTitle}
      colorOrange={colorOrange}
      colorBlack={colorBlack}>
      {message}
      {children}
    </StyledH1>
  )
}

export default H1
