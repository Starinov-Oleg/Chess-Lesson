import logo from './logo.module.css'
import photo from '../../assets/pages/chess-play/user.png'
function Logo() {
  return (
    <div className={logo.photo_pacage}>
      <img
        className={logo.photo}
        src={photo}
        alt='user logo <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>'
      />
    </div>
  )
}
export default Logo
