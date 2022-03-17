import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow } from '../../redux/reducer/user.reducer'
import Play from './play'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isAuth: state.auth.isAuth,
  }
}
let isAuth = props => {
  if (!props.isAuth) return <Navigate to='/login' />
  return <Play {...props} />
}
export default connect(mapStateToProps, { follow, unfollow, setUsers })(isAuth)
