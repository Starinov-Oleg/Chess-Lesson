import React from 'react'
import styled from 'styled-components'

interface CardTestResultProps {}

const StyledCardTest = styled.div``
function CardTestResult({}: CardTestResultProps) {
  return (
    <StyledCardTest className={`cardtestresult`}>
      Correct answer:<span></span>
    </StyledCardTest>
  )
}
export default CardTestResult
