import couch from './couch-item.module.css'
import Logo from '../../../ui-library/logo/logo'
import { NavLink } from 'react-router-dom'
function Couch() {
  return (
    <div className={couch.couch}>
      <div className={couch.friend}>
        <div className={couch.photo}>
          <NavLink to='user'>
            <Logo />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Couch
