import React from 'react'
import styled from 'styled-components'

import H3 from '../../../ui-library/h3/h3'

const StyledProfileText = styled.div`
  text-align: left;
`
interface UserProfileProps {
  messagename: any
}
function UserProfile({ messagename }: UserProfileProps) {
  return (
    <StyledProfileText>
      <H3 message={messagename} />
      <H3 message={`Win:`} primary />
      <H3 message={`Lose:`} primary />
    </StyledProfileText>
  )
}

export default UserProfile
