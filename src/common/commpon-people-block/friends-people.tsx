import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommonPeople from './common-people'
import { Row } from 'react-bootstrap'
import useGetUser from '../../hooks/get-user-hook'


function Friends() {
  const user = useGetUser()
  return (
    <Row>
      {user
        .filter((user: { group: string }) => user.group === 'friends')
        .map((user: { name: string; avatar: string; key: number; id: number }, index: number) => (
          <CommonPeople fullname={user.name} avatar={user.avatar} key={index} user={user.id} />
        ))}
    </Row>
  )
}

export default Friends

/***IF dont use delete */
