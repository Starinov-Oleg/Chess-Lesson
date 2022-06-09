import React from 'react'
import styled from 'styled-components'

import H3 from '../../../../ui-library/h3/h3'

interface PayProps {
  header: string
  body: string
  note?: string | null
  footer: string
  style?: { [key: string]: string }
}
const StyledPayItem = styled.div`
  background-color: white;
  box-shadow: 0 0 2rem var(--global-var-color-note);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  height: 20rem;
  font-family: 'Mochiy';
`
const StyledBlock = styled.div`
  height: 4rem;
  padding-top: 1rem;
`
const StyledP = styled.p`
  font-size: 1rem;
`
const StyledPNote = styled.p`
  color: #cecfcf;
`
function PayItem({ header, body, note, footer, style }: PayProps) {
  return (
    <StyledPayItem>
      <StyledBlock>
        <H3 message={header} colorBlack />
      </StyledBlock>
      <StyledBlock>
        <StyledP>{body}</StyledP>
      </StyledBlock>
      <StyledBlock>{note ? <StyledPNote>{note}</StyledPNote> : null}</StyledBlock>
      <StyledBlock>
        <H3 message={footer} colorBlack />
        <StyledPNote>for lesson</StyledPNote>
      </StyledBlock>
    </StyledPayItem>
  )
}

export default PayItem
