import styled from 'styled-components'

import H3 from '../h3/h3'

interface CardTestResultProps {}

const StyledCardTest = styled.div``
function CardTestResult({}: CardTestResultProps) {
  return (
    <StyledCardTest className={`cardtestresult`}>
     <H3 message={undefined}>Correct answer:<span></span></H3> 
    </StyledCardTest>
  )
}
export default CardTestResult
