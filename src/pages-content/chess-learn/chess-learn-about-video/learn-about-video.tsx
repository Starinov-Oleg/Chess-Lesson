import H3 from '../../../ui-library/h3/h3'
import Button from '../../../ui-library/button-click/button'
import styled from 'styled-components'

interface AboutProps {
  message: string
  textMessage: string
  onClick: () => void
}
const StyledAbout = styled.p`
  font-size: 1rem;
  padding: 1rem;
  font-family: 'Mochiy';
`
const StyledAlign = styled(H3)`
  padding: 1rem 1rem;
`

function About({ message, textMessage, onClick }: AboutProps) {
  return (
    <>
      <StyledAlign message={message} primary />
      <StyledAbout>{textMessage}</StyledAbout>
      <Button message='WATCH VIDEO' onClick={onClick} />
    </>
  )
}

export default About
