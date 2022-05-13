import React from 'react'

import logo from '../../assets/pages/header-pages/home.png'
import { NavLink } from 'react-router-dom'

function HomeLink() {
  return (
    <NavLink to='/home'>
      <img src={logo} alt='chess-land' />
    </NavLink>
  )
}

export default HomeLink
