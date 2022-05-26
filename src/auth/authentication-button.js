import React from 'react'

import LoginButton from '../ui-library/button-login/button-login-auth'
import LogoutButton from '../ui-library/button-logout/button-logout-auth'

import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = props => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <LogoutButton message={props.messagelogout} /> : <LoginButton message={props.messagelogin} />
}

export default AuthenticationButton
