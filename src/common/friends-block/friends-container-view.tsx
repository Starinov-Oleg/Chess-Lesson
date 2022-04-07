import React from 'react'
import photo from '../../assets/pages/chess-play/user.png'
import Friends from './friends'
import CardSocial from '../../ui-library/card-social/card-social'
import { Fragment, Key } from 'react'

interface FriendsContainerProps {
  unfollow(id: Key | null | undefined): Object
  follow(id: Key | null | undefined): Object
  isAuth: boolean
  users: any
}
function FriendsContainerView(props: FriendsContainerProps) {
  //const pageCount = Math.ceil(props.users.totalUserCount / props.users.pageSize) // for count friends on page
  // const pages=[];
  /**
   * for (const i=1; i<=pageCount; i++){
   *  pages.push(i);
   * }
   */

  const couchItems = props.users.map(
    (user: {
      id: Key | null | undefined
      position: string
      fullname: string
      followed: boolean
      photo: string | number
    }) => (
      <Fragment key={user.id}>
        {user.position === 'Friend' ? (
          <div className='col-md-3 col-12 '>
            <CardSocial
              fullname={user.fullname}
              message1='-'
              followed={user.followed}
              message2='+'
              alt='picture'
              showbutton
              src={user.photo !== 0 ? user.photo : photo}
              onClick1={() => {
                props.unfollow(user.id)
              }}
              onClick2={() => {
                props.follow(user.id)
              }}
              user={user.id}
            />
          </div>
        ) : null}
      </Fragment>
    )
  )

  if (!props.isAuth) {
    return (
      <div>
        <p> For display friends you need login in club</p>
      </div>
    )
  }

  return <Friends couchItems={couchItems} />
}
export default FriendsContainerView

/**TODO

 * onClick for use axios post - follow unfollow (post - follow, delete-unfollow)
 * disbaled button when sent request to server - 64 example
 */

/**DONE
 * guard route for friedns and couches, add component for it -isAuth
 */
