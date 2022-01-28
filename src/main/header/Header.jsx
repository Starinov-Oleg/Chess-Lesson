import header from './Header.module.css';

function Header() {
 return(
  <header className="header">
    <nav className={header.nav}>
      <div className={header.menu}>
        <i className={header.icon}></i>
      </div>
    </nav>
  </header> 
  );
}
export default Header;