import React from 'react'
import CardSocial from '../../../ui-library/card-social/card-social'
import picture from '../../../assets/pages/chess-play/user.png'
import styled from 'styled-components'

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
            followed='no'
            message2='+'
            alt='picture'
            showbutton
            showstatistic
            src={picture}
          />
        </StyledPlayFlex>
      </StyledPlayProfile>
    </section>
  )
}
export default PlayProfile
