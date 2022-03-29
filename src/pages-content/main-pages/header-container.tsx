import Header from './Header'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/reducer/auth.reducer'

interface HeaderProps {
  navlinkItems: any
}
function HeaderContainer({ navlinkItems }: HeaderProps) {
  return <Header navlinkItems={navlinkItems} isAuth={true} />
}
const mapStateToProps = (state: { auth: { isAuth: boolean } }) => ({
  isAuth: state.auth.isAuth,
  //login: state.auth.login,
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer)

/**TODO :container component for axios request for login - logout button work */
