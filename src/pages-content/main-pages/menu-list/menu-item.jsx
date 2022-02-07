import menuitem from'./menu-item.module.css';
import { NavLink } from 'react-router-dom';

function MenuItem(props){
    return(
        <div className="navigation-item">
            <NavLink to={props.href}  className={`nav-link py-3  ${menuitem.link} `}
                style={({ isActive }) => ({
                    color: isActive ? 'gold' : 'white',
                 })}>  
                <img  src={props.icon} className={menuitem.icon} alt={props.name}/> {props.name}               
            </NavLink>
        </div>  
    )
}

export default MenuItem