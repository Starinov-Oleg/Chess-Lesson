import friend from './friend-item.module.css'

import FriendsContainer from '../../../common/friends-block/friends-container'
function Friend() {
  return (
    <div className={friend.friend}>
      <div className={friend.photo}>
        <FriendsContainer />
      </div>
    </div>
  )
}

export default Friend

/**TODO:Navlink for redirect on friends use page */
