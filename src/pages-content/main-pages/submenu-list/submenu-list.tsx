import { Key } from 'react'
import { NavLink } from 'react-router-dom'
import submenulist from './submenu-list.module.css'
interface MenuItemProps {
  navlinkItems: any
}
function SubMenuList({ navlinkItems }: MenuItemProps) {
  return (
    <ul className={submenulist.dropdownmenu}>
      {navlinkItems.submenu.map((submenu: { name: string; href: string }, i: Key | null | undefined) => (
        <li key={i}>
          <NavLink
            to={submenu.href}
            className={`nav-link ${submenulist.link} `}
            style={({ isActive }) => ({
              color: isActive ? 'gold' : 'white',
            })}>
            {submenu.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
export default SubMenuList
