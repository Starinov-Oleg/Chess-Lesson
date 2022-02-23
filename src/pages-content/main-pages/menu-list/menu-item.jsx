import menuitem from './menu-item.module.css'
import { NavLink } from 'react-router-dom'

function MenuItem({ navlinkItems }) {
  const DisplaynavlinkItems = navlinkItems.map(navlinkItem => (
    <NavLink
      key={navlinkItem.id.toString()}
      to={navlinkItem.href}
      className={`nav-link py-3  ${menuitem.link} `}
      style={({ isActive }) => ({
        color: isActive ? 'gold' : 'white',
      })}>
      <img src={navlinkItem.icon} className={menuitem.icon} alt={navlinkItem.name} /> {navlinkItem.name}
    </NavLink>
  ))
  return <div className='navigation-item'>{DisplaynavlinkItems}</div>
}

export default MenuItem
