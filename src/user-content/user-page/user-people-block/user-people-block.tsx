import React from 'react'
import H3 from '../../../ui-library/h3/h3'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

interface UserPeopleBlockProps {
  spanlength: number
  spancount: number
  fullname?: string
  childFriends: React.ReactNode
  childCouches: React.ReactNode
}

const StyledUserPeople = styled.div`
  margin: 3%;
  border-radius: 10px;
  border: 1px solid #ff6b08;
`
function UserPeopleBlock({ spanlength, spancount, childFriends, childCouches }: UserPeopleBlockProps) {
  return (
    <StyledUserPeople>
      <H3 message='Friends' primary />
      All friends and couches:
      <span>{spanlength}</span>
      Friends:<span>{spancount}</span>
      {childFriends}
      <H3 message='Couches' primary />
      {childCouches}
    </StyledUserPeople>
  )
}

export default UserPeopleBlock
