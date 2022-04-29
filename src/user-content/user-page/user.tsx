import React, { useState, useEffect, Fragment } from 'react'
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
import AddPost from './user-action/add-post/add-post'
import { format } from 'date-fns'
import Popup from '../../common/popup-message/popup-message'

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
  const [post, setPost] = useState<any[]>([])
  const [user, setUser] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
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
  const removeData = (id: any | never, userId: any | never) => {
    axios.delete(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${userId}/post/${id}`).then(() => {
      // const del = post.filter(item => item.id !== id)
      setPost(post.filter(item => item.id !== id))
      setIsOpen(!isOpen)
    })
  }

  const count = peopleFriends.length

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
          id: number
        },
        index: number
      ) => (
        <section key={index}>
          <Container fluid className='p-0 l-0'>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <UserHeader cover={user.image_profile} photo={user.avatar} />
                <Button message='Chess Report Card' onClick={() => setShowResults(!showResults)} />
                {showResults ? <ChessReportCard /> : null}
              </Col>
            </Row>
            <Row>
              <Col md={12} xl={6} sm={12} xs={12}>
                <UserProfile messagename={user.name} />
                <UserPeopleBlock
                  spanlength={length}
                  spancount={count}
                  childFriends={<Row>{peopleFriends}</Row>}
                  childCouches={<Row>{peopleCouches}</Row>}
                />
              </Col>
              <Col md={12} xl={6} sm={12} xs={12}>
                <StyledActionBlock>
                  <AddPost />
                  {post
                    .filter((post: any) => post.userId === String(id))
                    .map(
                      (
                        item: { body: string | undefined; createdAt: any; id: number; userId: number },
                        index: number
                      ) => {
                        return (
                          <Fragment key={index}>
                            <ActionItem
                              body={item.body}
                              data={format(new Date(item.createdAt), 'dd/MM/yyyy')}
                              onClick={() => {
                                // window.confirm('Your message') && removeData(item.id, item.userId)
                                togglePopup()
                              }}
                              id={item.id}
                            />
                            {isOpen && (
                              <Popup
                                content={
                                  <>
                                    <Button
                                      message='Delete'
                                      onClick={() => {
                                        removeData(item.id, item.userId)
                                      }}
                                    />
                                    <Button
                                      message='Canchel'
                                      onClick={() => {
                                        togglePopup()
                                      }}
                                    />
                                  </>
                                }
                              />
                            )}
                          </Fragment>
                        )
                      }
                    )}
                </StyledActionBlock>
              </Col>
            </Row>
          </Container>
        </section>
      )
    )
}

export default UserPage
