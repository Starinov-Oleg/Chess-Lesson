import friend from './friend-item.module.css'
import Logo from '../../../ui-library/logo/logo'
import { NavLink } from 'react-router-dom'
function Friend() {
  return (
    <div className={friend.friend}>
      <div className={friend.photo}>
        <NavLink to='user'>
          <Logo />
        </NavLink>
      </div>
    </div>
  )
}

export default Friend

/**TODO:Navlink for redirect on friends use page */
