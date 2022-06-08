import React from 'react'
import { Col } from 'react-bootstrap'

import CardSocial from '../../ui-library/card-social/card-social'

interface PeopleContainerProps {
  unfollow?: any
  follow?: any
  fullname?: any
  avatar?: any
  user?: any
  followed?: any
}
function CommonPeople({ fullname, followed, unfollow, follow, avatar, user }: PeopleContainerProps) {
  return (
    <Col md={3} xs={12}>
      <CardSocial
        fullname={fullname}
        message1='-'
        followed={followed}
        message2='+'
        alt='picture'
        showbutton
        src={avatar}
        user={user}
        onClick1={() => {
          unfollow(user)
        }}
        onClick2={() => {
          follow(user)
        }}
      />
    </Col>
  )
}

export default CommonPeople

/**TODO make fallow-unfallow */
