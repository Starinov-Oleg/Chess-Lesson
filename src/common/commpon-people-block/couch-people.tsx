import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import useGetUser from '../../hooks/get-user-hook'
import CommonPeople from './common-people'

function Couches() {
  const user = useGetUser()
  return (
    <Row>
      {user
        ?.filter((user: { group: string }) => user.group === 'couch')
        .map((user: { name: string; avatar: string; key: number; id: number }, index: number) => (
          <CommonPeople fullname={user.name} avatar={user.avatar} key={index} user={user.id} />
        ))}
    </Row>
  )
}

export default Couches
