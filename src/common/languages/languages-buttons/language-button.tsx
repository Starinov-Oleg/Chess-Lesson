import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../../../ui-library/button-click/button'
const StyledLanguageButtonsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
`
const StyledLanguageIcon = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 10px;
  font-weight: 800;
  color: gold;
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
  onClick: () => void
  onClickVn: () => void
  language: any
}

function LanguageButton({ onClick, onClickVn, language }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const changeLanguage = () => {
    setIsClicked(!isClicked)
  }
  return (
    <StyledLanguageButtonsContainer>
      <Button onClick={changeLanguage} message={language} />

      {isClicked ? (
        <>
          <StyledLanguageIcon onClick={onClickVn}>VN</StyledLanguageIcon>
          <StyledSpan>|</StyledSpan>
          <StyledLanguageIcon onClick={onClick}>UK</StyledLanguageIcon>
        </>
      ) : (
        ''
      )}
    </StyledLanguageButtonsContainer>
  )
}
export default LanguageButton
