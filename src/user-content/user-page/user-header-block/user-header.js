import userheader from './user.module.css'
import Logo from '../../../ui-library/logo/logo'
function UserHeader() {
  return (
    <div className={userheader.profile_display}>
      <div className={userheader.profile_cover}></div>
      <div className={userheader.logo_info}>
        <Logo />
      </div>
    </div>
  )
}
export default UserHeader
