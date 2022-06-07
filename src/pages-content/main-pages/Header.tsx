import React from 'react'
import { RootStateOrAny,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/section-learn/logo.png'
import AuthNav from '../../auth/auth-nav'
import Button from '../../ui-library/button-link/button-link'
import MenuItem from './menu-list/menu-item'

interface HeaderProps {
  navlinkItems: string
}

const StyledLogo = styled.img`
  width: 140px;
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
function Header({ navlinkItems }: HeaderProps) {
  return (
    <div className='d-flex flex-sm-column flex-row flex-nowrap  '>
      <div className='navigation'>
        <StyledNavLink to='/'>
          <StyledLogo src={logo} alt='home' />
        </StyledNavLink>
        <MenuItem navlinkItems={navlinkItems} />
        <AuthNav messagelogout='Logout' messagelogin='Login' />
      </div>
    </div>
  )
}
export default React.memo(Header)

/** TODO isAuth check auth... return or login or button for register */
/**Button before auth0
 *   const { isAuth } = useSelector((state: RootStateOrAny) => state.auth)

 *  {isAuth ? <Button message='LOGOUT' href='/LOGIN' /> : <Button message='LOG IN' href='/LOGIN' />}
 */
