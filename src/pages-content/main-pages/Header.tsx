import React from 'react'
import header from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/section-learn/logo.png'
import MenuItem from './menu-list/menu-item'
import Button from '../../ui-library/button-link/button-link'

interface HeaderProps {
  navlinkItems: string
  isAuth: boolean
}
function Header({ navlinkItems, isAuth }: HeaderProps) {
  const style = { margin: '5px', padding: '0.5rem', display: 'flex', justifyContent: 'center' }
  return (
    <div className='d-flex flex-sm-column flex-row flex-nowrap  sticky-top '>
      <div className='navigation'>
        <NavLink to='/' className={`nav-link  text-decoration-none ${header.logo} `}>
          <img src={logo} alt='home' className={header.logo} />
        </NavLink>
        <MenuItem navlinkItems={navlinkItems} />
        {isAuth ? (
          <Button message='LOGOUT' href='/LOGIN' style={style} />
        ) : (
          <Button message='LOG IN' href='/LOGIN' style={style} />
        )}
      </div>
    </div>
  )
}
export default React.memo(Header)

/** TODO isAuth check auth... return or login or button for register */
