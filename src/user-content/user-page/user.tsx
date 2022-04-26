import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData, itemsSelector } from '../../redux/slicer/user-slicer'
import { fetchData1, postSelector } from '../../redux/slicer/user-activity-slicer'

import page from './user-page.module.css'
import UserHeader from './user-header-block/user-header'
import ActionItem from './user-actionline-item/action-line'
import H3 from '../../ui-library/h3/h3'
import { useParams } from 'react-router-dom'
import CommonFriends from '../../common/common-friends-block/common-friends'
import CommonCouch from '../../common/common-couch-block/common-couch'
import ChessReportCard from '../chess-report-card/chess-report-card'
import Button from '../../ui-library/button-click/button'

function UserPage() {
  const dispatch = useDispatch()
  const dispatch1 = useDispatch()
  const { users, isAuth } = useSelector(itemsSelector)
  const { posts } = useSelector(postSelector)
  useEffect(() => {
    dispatch(fetchData())
    dispatch1(fetchData1())
  }, [dispatch, dispatch1])

  const h3 = { paddingTop: '1rem' }
  const { id } = useParams()

  const [showResults, setShowResults] = useState(false)
  const friends = users.filter((user: { group: string }) => user.group === 'friends')
  const count = friends.length
  const blogPosts = posts.map((item: { body: string | undefined }, index: number) => {
    return <ActionItem body={item.body} key={index} />
  })
  return users
    .filter((user: any) => user.id === String(id))
    .map(
      (
        user: { group: string; name: string; followed: boolean; avatar: string | number; body: string },
        index: number
      ) => (
        <section key={index}>
          <div className={page.page}>
            <div className='row'>
              <div className='col-md-12 col-12 '>
                <UserHeader cover={user.avatar} photo={user.avatar} />
                <Button message='Chess Report Card' onClick={() => setShowResults(!showResults)} />
                {showResults ? <ChessReportCard /> : null}
              </div>
              <div className='col-md-6 col-12'>
                <div className={page.profile}>
                  <div className={page.profiletext}>
                    <H3 message={user.name} />
                    <H3 message={`Win:`} primary />
                    <H3 message={`Lose:`} primary />
                  </div>
                  <div className={page.settings}></div>
                </div>
                <div className={page.people}>
                  <div className={page.friends}>
                    <H3 message='Friends' style={h3} primary />
                    <div className={page.more}>
                      All friends and couches:<span>{users.length}</span>
                    </div>
                    <div className={page.totalcount}>
                      Friends:<span>{count}</span>
                    </div>
                    <CommonFriends />
                  </div>
                  <div className={page.coaches}>
                    <H3 message='Couches' primary />
                    <CommonCouch />
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 '>
                <div className={page.actionsline}>
                  <ActionItem />
                  {blogPosts}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    )
}

export default UserPage
