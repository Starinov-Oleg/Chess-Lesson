import React, { useState, Fragment } from 'react'
import { NavLink, To } from 'react-router-dom'
import Button from '../../../ui-library/button-click/button'
import SubMenuList from '../submenu-list/submenu-list'
import styled from 'styled-components'

interface MenuItemProps {
  navlinkItems: any
  name?: string
}

const StyledLog = styled.img`
  width: 2rem;
`
const StyledUlDropDownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
`
const StyledNavLink = styled(NavLink)`
  font-family: 'Mochiy';
  font-size: 1.2rem;
  color: white;
  text-align: left;
  display: inline-block;
  padding: 0.5rem 1rem;
  &:focus,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
  text-decoration: ${props => {
    console.log(props.style)
    return props.style ? isActive => (isActive ? 'underline' : 'none') : 'none'
  }};
  &:hover {
    text-decoration: underline;
  }
  &[aria-current] {
    color: gold;
  }
  @media (max-width: 1256px) {
    width: auto;
    padding: 10px 12px;
    font-size: 12px;
  }
`
function MenuItem({ navlinkItems, name }: MenuItemProps) {
  const [showmenu, setMenu] = useState(false)

  function toggleButton() {
    if (!showmenu) setMenu(true)
    else setMenu(false)
  }
  return (
    <StyledUlDropDownMenu>
      {navlinkItems.map(
        (navlinkItem: {
          id: { toString: () => React.Key | null | undefined }
          href: To
          icon: string | undefined
          name: {} | null | undefined
          submenu: any
        }) => (
          <Fragment key={navlinkItem.id.toString()}>
            <li className='nav-item submenu-control'>
              <StyledNavLink to={navlinkItem.href}>
                <StyledLog src={navlinkItem.icon} alt={name} />
                {navlinkItem.name}
              </StyledNavLink>
              {navlinkItem.submenu ? (
                <>
                  <Button message='+' onClick={() => toggleButton()} />
                  {showmenu ? <SubMenuList navlinkItems={navlinkItem} /> : null}
                </>
              ) : null}
            </li>
          </Fragment>
        )
      )}
    </StyledUlDropDownMenu>
  )
}

export default React.memo(MenuItem)
