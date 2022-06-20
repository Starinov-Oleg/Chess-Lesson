import styled from 'styled-components'

import { PaddingTop } from '../../common/styled-components/padding-margin.styled'
import H3 from '../h3/h3'

interface CardTestResultProps {
  message_result?: string
  count?: number | any
}

const StyledCardTest = styled.div``
function CardTestResult({ message_result, count }: CardTestResultProps) {
  return (
    <StyledCardTest className={`cardtestresult`}>
      <PaddingTop>
        <H3 message={message_result}>
          <span>{count}</span>
        </H3>
      </PaddingTop>
    </StyledCardTest>
  )
}
export default CardTestResult
