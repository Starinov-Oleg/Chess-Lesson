import React from 'react'
import styled from 'styled-components'

import Button from '../../button-link/button-link'

interface StatisticProps {
  win?: number
  lose?: number
}
const StyledStatic = styled.div`
  padding: 1rem;
`
const StyledUserVictoriesCount = styled.p`
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Mochiy';
`
const StyledUserVictoriesCounSpan = styled.span`
  padding: 1rem;
`
function Statistic({ win, lose }: StatisticProps) {
  return (
    <StyledStatic>
      <h5>Win: {win}</h5>
      <h5>Lose: {lose}</h5>
      <StyledUserVictoriesCount>
        Victories:
        <StyledUserVictoriesCounSpan>100</StyledUserVictoriesCounSpan>
      </StyledUserVictoriesCount>
      <p>
        Best Victories <Button message='WATCH' href='/pages/chesslandcoaches' />
      </p>
    </StyledStatic>
  )
}
export default Statistic
