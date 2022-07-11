import { format } from 'date-fns'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Couches from '../../common/commpon-people-block/couch-people'
import Friends from '../../common/commpon-people-block/friends-people'
import useGetUser from '../../hooks/get-user-hook'
import useAddPost from '../../hooks/post-add-hook'
import useDeletePost from '../../hooks/post-delete-hook'
import usePost from '../../hooks/post-hook'
import Button from '../../ui-library/button-click/button'
import ChessReportCard from '../chess-report-card/chess-report-card'
import AddPost from './user-index/user-action/add-post/add-post'
import ActionPostLineSearch from './user-index/user-action/filter-search-post/action-post-search'
import FilterPost from './user-index/user-action/filter-search-post/filter-post'
import SearchPost from './user-index/user-action/filter-search-post/search-post'
import ActionPostLine from './user-index/user-actionline-item/posts-line/action-post-line'
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

function UserPage() {
  const user = useGetUser()
  const { id } = useParams()

  const [showResults, setShowResults] = useState(false)
  const [post, setPost] = useState<any[] | undefined>([])
  const [text, setText] = useState<any | undefined>(undefined)
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<any[] | undefined>([])

  const querypost = usePost(id)
  const querydeletepost = useDeletePost(id)
  const queryaddpost = useAddPost()

  const urlSettings = `/user/${id}/settings`
  const thisuser = user?.find(user => user.id === id)
  const length = user?.length
  const peopleFriends = user?.filter((user: { group: string }) => user.group === 'friends').length

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

  return (
    <section>
      <Container fluid className='p-0 l-0'>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <UserHeader cover={thisuser.image_profile} photo={thisuser.avatar} user={urlSettings} />
            <Button message='Chess Report Card' onClick={() => setShowResults(!showResults)} />
            {showResults ? <ChessReportCard /> : null}
          </Col>
        </Row>
        <Row>
          <Col md={12} xl={6} sm={12} xs={12}>
            <Competition messagename={thisuser.name} />
            <UserPeopleBlock
              spanlength={length}
              spancount={peopleFriends}
              childFriends={<Friends />}
              childCouches={<Couches />}
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
              {search.length > 1 ? (
                <ActionPostLineSearch id={id} searchResult={searchResult} />
              ) : (
                <ActionPostLine id={id} />
              )}
            </StyledActionBlock>
          </Col>
        </Row>
      </Container>
    </section>
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
