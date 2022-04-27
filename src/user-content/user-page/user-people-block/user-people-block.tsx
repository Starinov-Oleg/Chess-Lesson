import React from 'react'
import H3 from '../../../ui-library/h3/h3'
import styled from 'styled-components'
import CommonFriends from '../../../common/common-friends-block/common-friends'
import CommonCouch from '../../../common/common-couch-block/common-couch'
interface UserPeopleBlockProps {
  spanlength: number
  spancount: number
}

const StyledUserPeople = styled.div`
  margin: 3%;
  border-radius: 10px;
  border: 1px solid #ff6b08;
`
function UserPeopleBlock({ spanlength, spancount }: UserPeopleBlockProps) {
  return (
    <StyledUserPeople>
      <div>
        <H3 message='Friends' primary />
        <div>
          All friends and couches:
          <span>{spanlength}</span>
        </div>
        <div>
          Friends:<span>{spancount}</span>
        </div>
        <CommonFriends />
      </div>
      <div>
        <H3 message='Couches' primary />
        <CommonCouch />
      </div>
    </StyledUserPeople>
  )
}

export default UserPeopleBlock
