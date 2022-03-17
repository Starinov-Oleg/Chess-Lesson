import logo from './logo.module.css'
function Logo({ src }) {
  return (
    <div className={logo.photo_pacage}>
      <img
        className={logo.photo}
        src={src}
        alt='user logo <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>'
      />
    </div>
  )
}
export default Logo
