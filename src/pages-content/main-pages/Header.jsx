import header from './Header.module.css';
import home_icon from '../../assets/pages/header-pages/home.png';
import play_icon from '../../assets/pages/header-pages/play.png';
import adventure_icon from '../../assets/pages/header-pages/adventure.png';
import coach_icon from '../../assets/pages/header-pages/coach.png';
import connect_icon from '../../assets/pages/header-pages/connect.png';
import event_icon from '../../assets/pages/header-pages/event.png';
import learn_icon from '../../assets/pages/header-pages/learn.png'
import { NavLink } from 'react-router-dom';
import  logo from '../../assets/section-learn/logo.png';

const MenuItem=(props)=>{
    return (
        <div className="navigation-item">
            <NavLink to={props.href}  className={`nav-link py-3  ${header.link} ${header.color_white} `}
                style={({ isActive }) => ({
                    color: isActive ? 'gold' : 'white',
                 })}>  
                <img  src={props.icon} alt="home" className={header.icon}/> {props.name}               
            </NavLink>
        </div>        
    )
}

function HeaderPage(){    
    return(
            <div className="d-flex flex-sm-column flex-row flex-nowrap  sticky-top align">
                <NavLink to="/" className="d-block p-3  text-decoration-none" >
                  <i className={header.icon}></i>
                </NavLink>
                <NavLink to="/" className={`nav-link  text-decoration-none ${header.logo} `} >
                    <img  src={logo} alt="home" className={header.logo}/>
                </NavLink>
                <div className="navigation">
                    <MenuItem  href="home" name="Home" icon={home_icon}/>

                    <div className="navigation-item">
                        <NavLink to="play"  className={`nav-link py-3  ${header.link}`}   
                        style={({ isActive }) => ({
                                  color: isActive ? 'gold' : 'white',
                                })}>
                           <img  src={play_icon} alt="play" className={header.icon}/> Play
                        </NavLink>
                    </div>
                    <div className="navigation-item">
                        <NavLink to="chesslearn" className={`nav-link py-3  ${header.link}`} 
                        style={({ isActive }) => ({
                                  color: isActive ? 'gold' : 'white',
                                })}>
                           <img  src={learn_icon} alt="learn" className={header.icon}/> Learn
                        </NavLink>
                    </div>
                    <div className="navigation-item">
                        <NavLink to="chesslandcoaches" className={`nav-link py-3 ${header.link}`} 
                        style={({ isActive }) => ({
                                  color: isActive ? 'gold' : 'white',
                                })}>                        
                           <img  src={coach_icon} alt="coach" className={header.icon}/> Coaching
                        </NavLink>
                    </div>
                    <div className="navigation-item">
                        <NavLink to="contact" className={`nav-link py-3 ${header.link}`} 
                        style={({ isActive }) => ({
                                  color: isActive ? 'gold' : 'white',
                                })}>                       
                           <img  src={connect_icon} alt="connect" className={header.icon}/> Connect
                        </NavLink>
                    </div>
                    <div className="navigation-item">
                        <NavLink to="events" className={`nav-link py-3 ${header.link}`} 
                        style={({ isActive }) => ({
                                  color: isActive ? 'gold' : 'white',
                                })}>
                           <img  src={event_icon} alt="events" className={header.icon}/> Events
                        </NavLink>
                    </div>
                    <div className="navigation-item">
                        <NavLink to="adventure"  className={`nav-link py-3  ${header.link}`} title="" 
                        style={({ isActive }) => ({
                                  color: isActive ? 'gold' : 'white',
                                })}>
                           <img  src={adventure_icon} alt="adventure" className={header.icon}/> Adventure
                        </NavLink>
                    </div>
                </div>

            </div>
    )
}
export default HeaderPage