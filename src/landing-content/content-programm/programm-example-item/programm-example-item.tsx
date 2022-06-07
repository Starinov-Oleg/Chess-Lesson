import React from 'react'
import styled from 'styled-components'

import H3 from '../../../ui-library/h3/h3'

interface ProgrammExampleItemProps {
  messagetitle: string
  messagebody: string
  messagenote?: string
  src?: string
}
const StyledProgrammExampleItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  margin-top: 2rem;
  font-size: var(--global-var-font-size-1rem);
  color: var(--global-var-color-black);
  text-align: left;
`
const StyledProgrammExampleFlexItem1 = styled.div`
  width: 25%;
  border-radius: 10px;
  text-align: center;
`
const StyledProgrammExampleFlexItem2 = styled.div`
  width: 25%;
  padding: 1rem;
  font-size: 1rem;
`
const StyledProgrammExampleFlexItem3 = styled.div`
  width: 50%;
`
const StyledProgrammItemBody = styled.p`
  padding: 1rem;
`
const StyledImg = styled.img`
  width: 10rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const StyledHr = styled.hr`
  border: 1px solid var(--global-var-color-orange);
`
function ProgrammExampleItem({ messagetitle, messagebody, messagenote, src }: ProgrammExampleItemProps) {
  return (
    <>
      <StyledProgrammExampleItem>
        <StyledProgrammExampleFlexItem1>
          <StyledImg src={src} alt='title programm block' />
        </StyledProgrammExampleFlexItem1>
        <StyledProgrammExampleFlexItem2>
          <H3 message={messagetitle} colorOrange textAlignLeft />
          <H3 message={messagenote} colorNote />
        </StyledProgrammExampleFlexItem2>
        <StyledProgrammExampleFlexItem3>
          <StyledProgrammItemBody>{messagebody}</StyledProgrammItemBody>
        </StyledProgrammExampleFlexItem3>
      </StyledProgrammExampleItem>
      <StyledHr />
    </>
  )
}

export default ProgrammExampleItem
/**TODO FIX messagenote for not display in DOM if empty   */
