import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/reducer/user.reducer'

import ContactContainer from './contact-container-view'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
  }
}
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
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
