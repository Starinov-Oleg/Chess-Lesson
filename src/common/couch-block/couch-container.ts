import React from 'react'

import { connect } from 'react-redux'
import { follow, setUsers, unfollow } from '../../redux/reducer/user.reducer'
import CouchContainerView from './couch-container-view'

let mapStateToProps = (state: {
  usersPage: { users: object; pageSize: number; totalUsersCount: number }
  auth: { isAuth: any }
}) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers })(CouchContainerView)
