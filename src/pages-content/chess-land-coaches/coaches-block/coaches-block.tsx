import styled from 'styled-components'

import H1 from '../../../ui-library/h1/h1'

interface CoachBlockProps {
  message: string
  textMessage: string
}

const StyledCoachesBlockBody = styled.div`
  text-align: left;
  font-size: 1rem;
  font-family: 'Mochiy';
`
function CoachBlock({ message, textMessage }: CoachBlockProps) {
  return (
    <div>
      <H1 message={message} primary />
      <StyledCoachesBlockBody>
        <p>{textMessage}</p>
      </StyledCoachesBlockBody>
    </div>
  )
}

export default CoachBlock
