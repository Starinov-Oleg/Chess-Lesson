import H1 from '../../../ui-library/h1/h1'
import picture from '../../../assets/pages/chess-learn/learn-video.jpg'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 100%;
`
function Cover() {
  return (
    <div>
      <H1 message='Chose video' primary />
      <StyledImg
        src={picture}
        alt='video here <a href=https://www.freepik.com/vectors/background>Background vector created by pch.vector - www.freepik.com</a>'
      />
    </div>
  )
}

export default Cover
