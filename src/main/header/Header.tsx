import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import img from '../../assets/header/icon.png'

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70px;
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 2rem;
  padding-left: 2rem;
`
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url(${img});
  background-position: center;
  background-size: contain, cover;
  background-repeat: no-repeat;
`
function Header() {
  return (
    <header className='header'>
      <StyledNav>
        <NavLink to='/home'>
          <StyledMenu></StyledMenu>
        </NavLink>
      </StyledNav>
    </header>
  )
}
export default React.memo(Header)
