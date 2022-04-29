import React, { useState, useEffect } from 'react'
import picture from '../../assets/pages/chess-play/user.png'
import { useSelector, RootStateOrAny } from 'react-redux'
import Contact from './contact'
import Card from '../../ui-library/card/card'
import CommonPeople from '../../common/commpon-people-block/common-people'
import { Key } from 'react'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function ContactContainerView() {
  const { id } = useParams()
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(response => {
      setUser(response.data)
    })
  }, [id])
  const peopleFriends = user
    .filter((user: { group: string }) => user.group === 'friends')
    .map((item: { name: string; avatar: string; key: number; id: number }, index: number) => {
      return <CommonPeople fullname={item.name} avatar={item.avatar} key={index} user={item.id} />
    })
  const peopleCouches = user
    .filter((user: { group: string }) => user.group === 'couch')
    .map((item: { name: string; avatar: string; key: number; id: number }, index: number) => {
      return <CommonPeople fullname={item.name} avatar={item.avatar} key={index} user={item.id} />
    })
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
      childFriends={<Row>{peopleFriends}</Row>}
      childCouches={<Row>{peopleCouches}</Row>}
    />
  )
}
export default ContactContainerView
