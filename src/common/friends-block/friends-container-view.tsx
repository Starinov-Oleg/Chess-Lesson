import React, { useState, useEffect } from 'react'
import photo from '../../assets/pages/chess-play/user.png'
import Friends from './friends'
import CardSocial from '../../ui-library/card-social/card-social'
import { Fragment, Key } from 'react'
import { fetchData } from '../../services/user.service'
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
  const [users, setUser] = useState<any>([])
  useEffect(() => {
    fetchData(setUser)
  }, [])
  const couchItems = users.map(
    (user: {
      id: Key | null | undefined
      position: string
      first_name: string
      followed: boolean
      avatar: string | number
    }) => (
      <Fragment key={user.id}>
        <div className='col-md-3 col-12 '>
          <CardSocial
            fullname={user.first_name}
            message1='-'
            followed={user.followed}
            message2='+'
            alt='picture'
            showbutton
            src={user.avatar !== 0 ? user.avatar : photo}
            onClick1={() => {
              props.unfollow(user.id)
            }}
            onClick2={() => {
              props.follow(user.id)
            }}
            user={user.id}
          />
        </div>
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
