import React from 'react'
import styled from 'styled-components'

import H3 from '../../../../ui-library/h3/h3'

const StyledProfileText = styled.div`
  text-align: left;
`
interface CompetitionProps {
  messagename: any
}
function Competition({ messagename }: CompetitionProps) {
  return (
    <StyledProfileText>
      <H3 message={messagename} />
      <H3 message={`Win:`} primary />
      <H3 message={`Lose:`} primary />
    </StyledProfileText>
  )
}

export default Competition
