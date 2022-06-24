import { format } from 'date-fns'
import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import CommonPeople from '../../common/commpon-people-block/common-people'
import Popup from '../../common/popup-message/popup-message'
import useGetUser from '../../hooks/get-user-hook'
import useAddPost from '../../hooks/post-add-hook'
import useDeletePost from '../../hooks/post-delete-hook'
import usePost from '../../hooks/post-hook'
import Button from '../../ui-library/button-click/button'
import ChessReportCard from '../chess-report-card/chess-report-card'
import AddPost from './user-index/user-action/add-post/add-post'
import FilterPost from './user-index/user-action/filter-search-post/filter-post'
import SearchPost from './user-index/user-action/filter-search-post/search-post'
import ActionItem from './user-index/user-actionline-item/action-line'
import Competition from './user-index/user-competition/Competition'
import UserHeader from './user-index/user-header-block/user-header'
import UserPeopleBlock from './user-index/user-people-block/user-people-block'
const StyledActionBlock = styled.div`
  margin-top: 3%;
  border-radius: 10px;
  border: 1px solid #ff6b08;
`
const StyledSearchFilterBlock = styled.div`
  padding: 1rem;
`

const togglePopupDelete = (id: any, userId: any | never, setIsOpen: any) => {
  setIsOpen({ show: true, id })
}
const handleDeleteFalse = (setIsOpen: any) => {
  setIsOpen({
    show: false,
    id: null,
  })
}

function UserPage() {
  const { id } = useParams()
  const [showResults, setShowResults] = useState(false)
  const [post, setPost] = useState<any[] | undefined>([])
  const [isOpen, setIsOpen] = useState({ show: false, id: null })
  const [text, setText] = useState<any | undefined>(undefined)
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<any[] | undefined>([])
  const user = useGetUser()
  const querypost = usePost(id)
  const querydeletepost = useDeletePost(id)
  const queryaddpost = useAddPost()

  const length = user?.length
  const urlSettings = '/user/' + user + '/post'
  const peopleFriends = user
    ?.filter((user: { group: string }) => user.group === 'friends')
    .map((item: { name: string; avatar: string; key: number; id: number }, index: number) => {
      return <CommonPeople fullname={item.name} avatar={item.avatar} key={index} user={item.id} />
    })
  const peopleCouches = user
    ?.filter((user: { group: string }) => user.group === 'couch')
    .map((item: { name: string; avatar: string; key: number; id: number }, index: number) => {
      return <CommonPeople fullname={item.name} avatar={item.avatar} key={index} user={item.id} />
    })

  const sortDataPost = () => {
    setPost(querypost?.sort((a, b) => (a.item > b.item ? 1 : -1)))
  }

  const searchItems = (searchValue: any) => {
    setSearch(searchValue)
    if (search !== '') {
      const filteredData = querypost?.filter((item: { [s: string]: unknown } | ArrayLike<unknown>) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
      })
      setSearchResult(filteredData)
    } else {
      setSearchResult(querypost)
    }
  }

  const postListComponent = querypost
    ?.filter((querypost: any) => querypost.userId === String(id))
    .map((item: { body: string | undefined; createdAt: any; id: number; userId: number }, index: number) => {
      return (
        <Fragment key={index}>
          <ActionItem
            body={item.body}
            data={format(new Date(item.createdAt), 'dd/MM/yyyy')}
            onClick={() => {
              togglePopupDelete(item.id, item.userId, setIsOpen)
            }}
            id={item.id}
          />

          {isOpen.id === item.id && (
            <Popup
              id={item.id}
              content_title='Delete Post'
              content_body='Post will deleted. This action is irreversible.'
              content={
                <>
                  <Button
                    message='Delete'
                    onClick={() => {
                      querydeletepost.mutate(item.id)
                    }}
                  />
                  <Button
                    message='Canchel'
                    onClick={() => {
                      handleDeleteFalse(setIsOpen)
                    }}
                  />
                </>
              }
            />
          )}
        </Fragment>
      )
    })
  const postListSearchComponent = searchResult
    ?.filter((querypost: any) => querypost.userId === String(id))
    .map((item: { body: string | undefined; createdAt: any; id: number; userId: number }, index: number) => {
      return (
        <Fragment key={index}>
          <ActionItem
            body={item.body}
            data={format(new Date(item.createdAt), 'dd/MM/yyyy')}
            onClick={() => {
              togglePopupDelete(item.id, item.userId, setIsOpen)
            }}
            id={item.id}
          />

          {isOpen.id === item.id && (
            <Popup
              id={item.id}
              content_title='Delete Post'
              content_body='Post will deleted. This action is irreversible.'
              content={
                <>
                  <Button
                    message='Delete'
                    onClick={() => {
                      querydeletepost.mutate(item.id)
                    }}
                  />
                  <Button
                    message='Canchel'
                    onClick={() => {
                      handleDeleteFalse(setIsOpen)
                    }}
                  />
                </>
              }
            />
          )}
        </Fragment>
      )
    })

  return user
    ?.filter((user: any) => user.id === String(id))
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
                <UserHeader
                  cover={user.image_profile}
                  photo={user.avatar}
                  urlSettings={urlSettings}
                  user={'/user/' + user.id + '/settings'}
                />
                <Button message='Chess Report Card' onClick={() => setShowResults(!showResults)} />
                {showResults ? <ChessReportCard /> : null}
              </Col>
            </Row>
            <Row>
              <Col md={12} xl={6} sm={12} xs={12}>
                <Competition messagename={user.name} />
                <UserPeopleBlock
                  spanlength={length}
                  spancount={peopleFriends?.length}
                  childFriends={<Row>{peopleFriends}</Row>}
                  childCouches={<Row>{peopleCouches}</Row>}
                />
              </Col>
              <Col md={12} xl={6} sm={12} xs={12}>
                <StyledActionBlock>
                  <StyledSearchFilterBlock>
                    <SearchPost onChange={(e: any) => searchItems(e.target.value)} />
                    <FilterPost
                      onClickData={() => {
                        sortDataPost()
                      }}
                    />
                  </StyledSearchFilterBlock>
                  <AddPost
                    onClick={() => {
                      queryaddpost.mutate(text)
                      setText('')
                    }}
                    onChange={(event: { target: { value: any } }) => {
                      setText(event.target.value)
                    }}
                    value={text}
                    name='body'
                    onReset={(event: { target: { value: any } }) => {
                      setText('')
                    }}
                  />
                  {search.length > 1 ? postListSearchComponent : postListComponent}
                </StyledActionBlock>
              </Col>
            </Row>
          </Container>
        </section>
      )
    )
}

export default UserPage

/**
 *  For custom hook 
 *   const { refetch, data: getpost } = useQuery('articles', () => PostService.getPostId(id), {
    select: data =>
      data.map(post => ({
        ...post,
      })),
  })
 */
