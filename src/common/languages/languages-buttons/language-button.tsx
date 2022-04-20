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
`
const StyledSpan = styled.span`
  color: gold;
`
interface ButtonProps {
  onClick?: () => void
}
function LanguageButton({ onClick }: ButtonProps) {
  return (
    <StyledLanguageButtonsContainer>
      <StyledLanguageIcon uk onClick={onClick}>
        UK
      </StyledLanguageIcon>
      <StyledSpan>|</StyledSpan>
      <StyledLanguageIcon vn>VN</StyledLanguageIcon>
    </StyledLanguageButtonsContainer>
  )
}
export default LanguageButton
