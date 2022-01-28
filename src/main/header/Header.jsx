import header from './Header.module.css';
import { NavLink } from 'react-router-dom';
function Header() {
 return(
  <header className="header">
    <nav className={header.nav}>
       <NavLink to="pages/home">
        <div className={header.menu}>
          <i className={header.icon}></i>
        </div> 
      </NavLink>
    </nav>
  </header> 
  );
}
export default Header;