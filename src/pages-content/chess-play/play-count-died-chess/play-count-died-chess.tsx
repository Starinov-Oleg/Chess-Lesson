import React from 'react'
import H3 from '../../../ui-library/h3/h3'
import styled from 'styled-components'

const HR = styled.hr`
  color: #ff6b08;
`
const StyledSpan = styled.span`
  color: blue;
`
interface DiedChessProp {
  name: string
}
function DiedChess({ name }: DiedChessProp) {
  return (
    <section>
      <div>
        <H3 message='Died Chess:' primary /> <StyledSpan>{name}</StyledSpan>:
        <HR />
      </div>
    </section>
  )
}
export default DiedChess
