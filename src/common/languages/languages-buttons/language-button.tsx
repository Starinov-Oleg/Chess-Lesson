import React from 'react'
import styled from 'styled-components'

interface StyledLanguageButton {
  uk?: boolean | string | undefined
  vn?: boolean | string | undefined
}
const StyledLanguageButtonsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
`
const StyledLanguageIcon = styled.div<StyledLanguageButton>`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 10px;
  color: gold;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 0px #c25e1b;
    color: var(--global-var-color-orange);
    width: 3.2rem;
    height: 3.2rem;
  }
`
const StyledSpan = styled.span`
  color: gold;
`
interface ButtonProps {
  onClick?: () => void
  onClickVn?: () => void
}
function LanguageButton({ onClick, onClickVn }: ButtonProps) {
  return (
    <StyledLanguageButtonsContainer>
      <StyledLanguageIcon onClick={onClick}>VN</StyledLanguageIcon>
      <StyledSpan>|</StyledSpan>
      <StyledLanguageIcon onClick={onClickVn}>UK</StyledLanguageIcon>
    </StyledLanguageButtonsContainer>
  )
}
export default LanguageButton
