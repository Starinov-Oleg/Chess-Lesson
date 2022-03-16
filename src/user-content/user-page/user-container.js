import { connect } from 'react-redux'
import { follow, setUsers, unfollow } from '../../redux/reducer/user.reducer'
import UserHeader from './user-header-block/user-header'
import UserPage from './user-page'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isAuth: state.auth.isAuth,
  }
}
let isAuth = props => {
  if (!props.isAuth)
    return (
      <div className='col-md-12 col-12'>
        <UserHeader />
      </div>
    )
  return <UserPage {...props} />
}
export default connect(mapStateToProps, { follow, unfollow, setUsers })(isAuth)
