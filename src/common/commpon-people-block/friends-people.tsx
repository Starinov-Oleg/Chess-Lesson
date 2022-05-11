import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommonPeople from './common-people'
import { Row } from 'react-bootstrap'

function Friends() {
  const { id } = useParams()
  const [user, setUser] = useState([])
  useEffect(() => {
    //getUser(setUser)
  }, [id])
  const peopleFriends = user
    .filter((user: { group: string }) => user.group === 'friends')
    .map((item: { name: string; avatar: string; key: number; id: number }, index: number) => {
      return <CommonPeople fullname={item.name} avatar={item.avatar} key={index} user={item.id} />
    })
  return (
    <>
      <Row>{peopleFriends}</Row>
    </>
  )
}

export default Friends

/***IF dont use delete */
