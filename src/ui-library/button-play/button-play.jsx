import buttonplay from './button-play.module.css';
import { NavLink } from "react-router-dom";

 function Button(props){
     return(
         <NavLink to={props.href} className={buttonplay.play}>{props.message}</NavLink>
     )
     
}

export default Button