import React, { useState } from 'react'
import menuitem from './menu-item.module.css'
import { NavLink, To } from 'react-router-dom'
import Button from '../../../ui-library/button-click/button'
import SubMenuList from '../submenu-list/submenu-list'
interface MenuItemProps {
  navlinkItems: any
  name?: string
}

function MenuItem({ navlinkItems, name }: MenuItemProps) {
  const stylebutton = { width: '2rem', height: '2rem', padding: '0', marginLeft: '1em', display: 'inline' }
  const [showmenu, setMenu] = useState(false)

  function toggleButton() {
    if (!showmenu) setMenu(true)
    else setMenu(false)
  }
  return (
    <ul className={menuitem.dropdownmenu}>
      {navlinkItems.map(
        (navlinkItem: {
          id: { toString: () => React.Key | null | undefined }
          href: To
          icon: string | undefined
          name: {} | null | undefined
          submenu: any
        }) => (
          <li key={navlinkItem.id.toString()} className='nav-item submenu-control'>
            <NavLink
              to={navlinkItem.href}
              className={`${menuitem.link} `}
              style={({ isActive }) => ({
                color: isActive ? 'gold' : 'white',
              })}>
              <img src={navlinkItem.icon} className={menuitem.icon} alt={name} />
              {navlinkItem.name}
            </NavLink>
            {navlinkItem.submenu ? (
              <>
                <Button message='+' style={stylebutton} onClick={() => toggleButton()} />
                {showmenu ? <SubMenuList navlinkItems={navlinkItem} /> : null}
              </>
            ) : null}
          </li>
        )
      )}
    </ul>
  )
}

export default React.memo(MenuItem)
