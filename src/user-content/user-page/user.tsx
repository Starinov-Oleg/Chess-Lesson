import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserProfile from './use-profile/user-profile'
import UserPeopleBlock from './user-people-block/user-people-block'
import CommonPeople from '../../common/commpon-people-block/common-people'
import UserHeader from './user-header-block/user-header'
import ActionItem from './user-actionline-item/action-line'
import { useParams } from 'react-router-dom'
import ChessReportCard from '../chess-report-card/chess-report-card'
import Button from '../../ui-library/button-click/button'
import axios from 'axios'
import styled from 'styled-components'

const StyledActionBlock = styled.div`
  margin-top: 3%;
  border-radius: 10px;
  border: 1px solid #ff6b08;
`
function UserPage() {
  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`).then(response => {
      setPost(response.data)
    })

    axios.get(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(response => {
      setUser(response.data)
    })
  }, [id])

  const [showResults, setShowResults] = useState(false)
  const [post, setPost] = useState([])
  const [user, setUser] = useState([])
  const friends = user.filter((user: { group: string }) => user.group === 'friends')
  const count = friends.length
  const length = user.length
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
  return user
    .filter((user: any) => user.id === String(id))
    .map(
      (
        user: {
          group: string
          name: string
          followed: boolean
          avatar: string | number
          image_profile: string | number
          body: string
          length: number
          spancount: number
        },
        index: number
      ) => (
        <section key={index}>
          <Container fluid className='p-0 l-0'>
            <Row>
              <Col md={12} xs={12}>
                <UserHeader cover={user.image_profile} photo={user.avatar} />
                <Button message='Chess Report Card' onClick={() => setShowResults(!showResults)} />
                {showResults ? <ChessReportCard /> : null}
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <UserProfile messagename={user.name} />
                <UserPeopleBlock
                  spanlength={length}
                  spancount={count}
                  childFriends={<Row>{peopleFriends}</Row>}
                  childCouches={<Row>{peopleCouches}</Row>}
                />
              </Col>
              <Col md={6} xs={12}>
                <StyledActionBlock>
                  {post
                    .filter((post: any) => post.userId === String(id))
                    .map((item: { body: string | undefined }, index: number) => {
                      return <ActionItem body={item.body} key={index} />
                    })}
                </StyledActionBlock>
              </Col>
            </Row>
          </Container>
        </section>
      )
    )
}

export default UserPage
