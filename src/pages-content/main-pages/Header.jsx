import React from 'react'
import header from './Header.module.css'
/*import home_icon from '../../assets/pages/header-pages/home.png'
import play_icon from '../../assets/pages/header-pages/play.png'
import adventure_icon from '../../assets/pages/header-pages/adventure.png'
import coach_icon from '../../assets/pages/header-pages/coach.png'
import connect_icon from '../../assets/pages/header-pages/connect.png'
import event_icon from '../../assets/pages/header-pages/event.png'
import learn_icon from '../../assets/pages/header-pages/learn.png'*/
import { NavLink } from 'react-router-dom'
import logo from '../../assets/section-learn/logo.png'
import MenuItem from './menu-list/menu-item'
import Button from '../../ui-library/button-click/button'

function HeaderPage({ navlinkItems }) {
  const style = { padding: '0.5rem 1rem', margin: '1rem', display: 'block' }
  /* here if dont use state  const navlinkItems = [
    { id: 0, href: 'home', name: 'home', icon: home_icon },
    { id: 1, href: 'play', name: 'Play', icon: play_icon },
    { id: 2, href: 'chesslearn', name: 'Learn', icon: adventure_icon },
    { id: 3, href: 'chesslandcoaches', name: 'Coaching', icon: coach_icon },
    { id: 4, href: 'contact', name: 'Connect', icon: connect_icon },
    { id: 5, href: 'events', name: 'Events', icon: event_icon },
    { id: 6, href: 'adventure', name: 'Adventure', icon: learn_icon },
  ]*/
  return (
    <div className='d-flex flex-sm-column flex-row flex-nowrap  sticky-top align'>
      <NavLink to='/' className={`nav-link  text-decoration-none ${header.logo} `}>
        <img src={logo} alt='home' className={header.logo} />
      </NavLink>
      <div className='navigation'>
        <MenuItem navlinkItems={navlinkItems} />
      </div>
      <div className={header.login_button}>
        <Button message='LOG IN' style={style} />
      </div>
    </div>
  )
}
export default React.memo(HeaderPage)
