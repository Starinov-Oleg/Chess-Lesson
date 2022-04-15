import React, { useEffect } from 'react'
import photo from '../../assets/pages/chess-play/user.png'
import CardSocial from '../../ui-library/card-social/card-social'
import { Fragment, Key } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, itemsSelector } from '../../redux/slicer/user-slicer'
import Friends from '../friends-block/friends'
interface FriendsContainerProps {
  unfollow?: any
  follow?: any
}
function CommonFriends(props: FriendsContainerProps) {
  const dispatch = useDispatch()

  const { loading, error, users, isAuth } = useSelector(itemsSelector)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const renderItems = () => {
    if (loading) return <strong>Loading please wait...</strong>
    if (error) return <strong>Items not available at this time</strong>
    if (!isAuth) return <strong> For display friends you need login in club</strong>

    return users.map(
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
              user={user.id}
              onClick1={() => {
                props.unfollow(user.id)
              }}
              onClick2={() => {
                props.follow(user.id)
              }}
            />
          </div>
        </Fragment>
      )
    )
  }

  return <Friends couchItems={renderItems()} />
}

export default CommonFriends

/**TODO make fallow-unfallow */
