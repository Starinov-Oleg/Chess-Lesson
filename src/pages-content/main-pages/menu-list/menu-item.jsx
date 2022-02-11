import menuitem from './menu-item.module.css'
import { NavLink } from 'react-router-dom'

function MenuItem(props) {
  const navlinkItems = props.navlinkItems.map(navlinkItem => (
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
  return <div className='navigation-item'>{navlinkItems}</div>
}

export default MenuItem
