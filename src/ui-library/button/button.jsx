import button from './button.module.css';
import { NavLink } from "react-router-dom";

 function Button(props){
     return(
         <NavLink to={props.href} className={button.button}>{props.message}</NavLink>
     )
     
}

export default Button