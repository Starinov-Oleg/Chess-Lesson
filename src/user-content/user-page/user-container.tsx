import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow } from '../../redux/reducer/user.reducer'
import UserPage from './user-page'

let mapStateToProps = (state: {
  usersPage: { users: any; pageSize: any; totalUsersCount: any }
  auth: { isAuth: any }
}) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isAuth: state.auth.isAuth,
  }
}
let isAuth = (props: { isAuth: any }) => {
  if (!props.isAuth) return <Navigate to='/login' />
  return <UserPage users={[]} totalcount={undefined} {...props} />
}
export default connect(mapStateToProps, { follow, unfollow, setUsers })(isAuth)
