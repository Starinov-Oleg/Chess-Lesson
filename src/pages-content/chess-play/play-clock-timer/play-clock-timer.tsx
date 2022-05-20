import React from 'react'
import H3 from '../../../ui-library/h3/h3'
import styled from 'styled-components'

const StyledFontTimer = styled.span`
  font-size: 2rem;
  padding-bottom: 2rem;
  font-family: 'Mochiy';
`
function PlayClockTimer() {
  return (
    <section className='PlayClockTimer'>
      <div>
        <H3 message='Timer:' primary />
        <StyledFontTimer>10:00</StyledFontTimer>
      </div>
    </section>
  )
}
export default PlayClockTimer
