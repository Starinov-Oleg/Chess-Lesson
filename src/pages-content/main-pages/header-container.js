import Header from './Header'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/reducer/auth.reducer'

function HeaderContainer({ navlinkItems }) {
  return <Header navlinkItems={navlinkItems} />
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, { setUserData })(HeaderContainer)

/**TODO :container component for axios request for login - logout button work */
