import userheader from './user.module.css'
import Logo from '../../../ui-library/logo/logo'
import photo from '../../../assets/pages/chess-play/user.png'

function UserHeader(props) {
  return (
    <div className={userheader.profile_display}>
      <div
        className={userheader.profile_cover}
        style={{
          backgroundImage: `url(${props.cover})`,
        }}></div>
      <div className={userheader.logo_info}>
        <Logo src={props.photo !== 0 ? props.photo : photo} />
      </div>
    </div>
  )
}
export default UserHeader
