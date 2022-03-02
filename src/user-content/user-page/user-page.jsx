import page from './user-page.module.css'
import Statistic from '../../ui-library/statistic/statistic'
import UserHeader from './user-header-block/user-header'
import ActionItem from './user-actionline-item/action-line'
import Settings from './user-settings/user-settings'
import Friend from './user-friends/friend-item'
import Couch from './user-couches/couch-item'
import H3 from '../../ui-library/h3/h3'
function UserPage() {
  const h3 = { paddingTop: '1rem' }
  return (
    <section>
      <div className={page.page}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <UserHeader />
          </div>
          <div className='col-md-6 col-12'>
            <div className={page.profile}>
              <div className={page.chessstatistic}>
                <Statistic />
              </div>
              <div className={page.settings}>
                <Settings />
              </div>
            </div>
            <div className={page.people}>
              <div className={page.friends}>
                <H3 message='Friends' style={h3} />
                <div className={page.more}>
                  <span>All friends</span>
                </div>
                <div className={page.totalcount}>
                  Friends: <span>44</span>
                </div>
                <Friend />
              </div>
              <div className={page.coaches}>
                <H3 message='Couches' />
                <Couch />
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
