import home from './home-link.module.css'
import logo from '../../assets/pages/header-pages/home.png'
import { NavLink } from 'react-router-dom'
function HomeLink() {
  return (
    <NavLink to='/pages/home'>
      <img src={logo} alt='chess-land' className={home.icon} />
    </NavLink>
  )
}

export default HomeLink
