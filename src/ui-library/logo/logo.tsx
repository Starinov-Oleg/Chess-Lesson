import React from 'react'
import styled from 'styled-components'

import photo from '../../assets/pages/chess-play/user.png'

interface LogoProps {
  src: string
}
const StyledPhotoPacage = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  width: 170px;
  height: 170px;
`
const StyledLogo = styled.img`
  height: 170px;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff6b08;
  border-radius: 10px;
  position: absolute;
`
function Logo({ src }: LogoProps) {
  return (
    <StyledPhotoPacage>
      <StyledLogo
        src={!src || src.length === 0 ? photo : src}
        alt='user logo <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>'
      />
    </StyledPhotoPacage>
  )
}
export default Logo
