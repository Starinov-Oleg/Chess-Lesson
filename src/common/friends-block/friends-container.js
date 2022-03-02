import { connect } from 'react-redux'
import { follow, setUsers, unfollow } from '../../redux/reducer/user.reducer'

import FriendsContainer from './friends-container-view'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
  }
}
/*
let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId))
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
  }
}*/
export default connect(mapStateToProps, { follow, unfollow, setUsers })(FriendsContainer)
