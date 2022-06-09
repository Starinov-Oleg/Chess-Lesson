import styled from 'styled-components'

import H3 from '../h3/h3'

interface CardTestResultProps {
  message_result?: string
  count?: number
}

const StyledCardTest = styled.div``
function CardTestResult({ message_result, count }: CardTestResultProps) {
  return (
    <StyledCardTest className={`cardtestresult`}>
      <H3 message={message_result}>
        <span>{count}</span>
      </H3>
    </StyledCardTest>
  )
}
export default CardTestResult
