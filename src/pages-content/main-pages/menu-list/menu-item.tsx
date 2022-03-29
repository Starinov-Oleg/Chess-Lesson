import React from 'react'
import menuitem from './menu-item.module.css'
import { NavLink, To } from 'react-router-dom'
interface MenuItemProps {
  navlinkItems: any
  name?: string
}

function MenuItem({ navlinkItems, name }: MenuItemProps) {
  const DisplaynavlinkItems = navlinkItems.map(
    (navlinkItem: {
      id: { toString: () => React.Key | null | undefined }
      href: To
      icon: string | undefined
      name: {} | null | undefined
    }) => (
      <NavLink
        key={navlinkItem.id.toString()}
        to={navlinkItem.href}
        className={`nav-link py-3  ${menuitem.link} `}
        style={({ isActive }) => ({
          color: isActive ? 'gold' : 'white',
        })}>
        <img src={navlinkItem.icon} className={menuitem.icon} alt={name} /> {navlinkItem.name}
      </NavLink>
    )
  )
  return <div className='navigation-item'>{DisplaynavlinkItems}</div>
}

export default React.memo(MenuItem)
