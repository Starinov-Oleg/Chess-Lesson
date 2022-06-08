import React from 'react'
import styled from 'styled-components'

import picture from '../../../assets/pages/chess-play/user.png'
import CardSocial from '../../../ui-library/card-social/card-social'

const StyledPlayProfile = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
`
const StyledPlayFlex = styled.div`
  display: flex;
  text-align: left;
  flex-wrap: wrap;
`
function PlayProfile() {
  return (
    <section className='playprofile'>
      <StyledPlayProfile>
        <StyledPlayFlex>
          <CardSocial
            fullname='Rival'
            message1='-'
            followed
            message2='+'
            alt='picture'
            showbutton
            showstatistic
            src={picture}
            user={undefined}
          />
        </StyledPlayFlex>
      </StyledPlayProfile>
    </section>
  )
}
export default PlayProfile
