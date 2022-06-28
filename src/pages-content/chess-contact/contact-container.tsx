import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Key } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'

import picture from '../../assets/pages/chess-play/user.png'
import Couches from '../../common/commpon-people-block/couch-people'
import Friends from '../../common/commpon-people-block/friends-people'
import Card from '../../ui-library/card/card'
import Contact from './contact'
function ContactContainerView() {
  const { isAuthenticated } = useAuth0()

  const contacts = useSelector((state: RootStateOrAny) => state.contacts)
  const cardItems = contacts.map(
    (contact: { id: Key | null | undefined; name: string; text: string; picture: string | null }) => (
      <div className='col-md-3 col-12 ' key={contact.id}>
        <Card
          fullname={contact.name}
          text={contact.text}
          alt='picture'
          src={contact.picture != null ? contact.picture : picture}
        />
      </div>
    )
  )

  return (
    <Contact
      cardItems={cardItems}
      childFriends={isAuthenticated ? <Friends /> : null}
      childCouches={isAuthenticated ? <Couches /> : null}
    />
  )
}
export default ContactContainerView
