import React from 'react'
import page from './user-page.module.css'
import UserHeader from './user-header-block/user-header'
import ActionItem from './user-actionline-item/action-line'
import H3 from '../../ui-library/h3/h3'
import { useParams } from 'react-router-dom'
import FriendsContainer from '../../common/friends-block/friends-container'
import CouchContainer from '../../common/couch-block/couch-container'
function UserPage(props) {
  const h3 = { paddingTop: '1rem' }
  const { id } = useParams()
  const user = props.users.find(p => p.id === Number(id))
  return (
    <section>
      <div className={page.page}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <UserHeader />
          </div>
          <div className='col-md-6 col-12'>
            <div className={page.profile}>
              <div className={page.profiletext}>
                <H3 message={user.fullname} />
                <H3 message={`Win:${user.win}`} />
                <H3 message={`Lose:${user.lose}`} />
              </div>
              <div className={page.settings}></div>
            </div>
            <div className={page.people}>
              <div className={page.friends}>
                <H3 message='Friends' style={h3} />
                <div className={page.more}>
                  <span>All friends</span>
                </div>
                <div className={page.totalcount}>
                  Friends: <span>{props.totalcount}</span>
                </div>
                <FriendsContainer />
              </div>
              <div className={page.coaches}>
                <H3 message='Couches' />
                <CouchContainer />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 '>
            <div className={page.actionsline}>
              <ActionItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserPage
