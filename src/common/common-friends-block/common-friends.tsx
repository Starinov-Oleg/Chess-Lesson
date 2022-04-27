import React, { useEffect } from 'react'
import photo from '../../assets/pages/chess-play/user.png'
import CardSocial from '../../ui-library/card-social/card-social'
import { Fragment, Key } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { fetchData } from '../../redux/slicer/user-slicer'
import Friends from './friends'
import { Col } from 'react-bootstrap'
interface FriendsContainerProps {
  unfollow?: any
  follow?: any
}
function CommonFriends(props: FriendsContainerProps) {
  const dispatch = useDispatch()

  const { loading, error, users } = useSelector((state: RootStateOrAny) => state.users)
  const { isAuth } = useSelector((state: RootStateOrAny) => state.auth)

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
        group: string
        name: string
        followed: boolean
        avatar: string | number
      }) => (
        <Fragment key={user.id}>
          {user.group === 'friends' ? (
            <Col md={3} xs={12}>
              <CardSocial
                fullname={user.name}
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
            </Col>
          ) : null}
        </Fragment>
      )
    )
  }

  return <Friends couchItems={renderItems()} />
}

export default CommonFriends

/**TODO make fallow-unfallow */
