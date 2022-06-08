import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/pages/header-pages/home.png'

function HomeLink() {
  return (
    <NavLink to='/home'>
      <img src={logo} alt='chess-land' />
    </NavLink>
  )
}

export default HomeLink
