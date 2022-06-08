import React from 'react'
import styled from 'styled-components'
import H3 from '../h3/h3'
interface CardTestProps {
  title: string
  description: string
}

const StyledCardTest = styled.div``
function CardTest({ title, description }: CardTestProps) {
  return (
    <StyledCardTest className={`cardtest`}>
      <H3 message={title} />
      <p>{description}</p>
    </StyledCardTest>
  )
}
export default CardTest
