import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/section-learn/logo.png'
import MenuItem from './menu-list/menu-item'
import Button from '../../ui-library/button-link/button-link'
import { useSelector, RootStateOrAny } from 'react-redux'
import styled from 'styled-components'

interface HeaderProps {
  navlinkItems: string
}

const StyledLogo = styled.img`
  width: 140px;
`
const StyledNavLink = styled(NavLink)`
  position: sticky;
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
  const { isAuth } = useSelector((state: RootStateOrAny) => state.auth)

  return (
    <div className='d-flex flex-sm-column flex-row flex-nowrap  sticky-top '>
      <div className='navigation'>
        <StyledNavLink to='/'>
          <StyledLogo src={logo} alt='home' />
        </StyledNavLink>
        <MenuItem navlinkItems={navlinkItems} />
        {isAuth ? <Button message='LOGOUT' href='/LOGIN' /> : <Button message='LOG IN' href='/LOGIN' />}
      </div>
    </div>
  )
}
export default React.memo(Header)

/** TODO isAuth check auth... return or login or button for register */
