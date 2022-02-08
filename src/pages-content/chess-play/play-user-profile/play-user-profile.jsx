import playprofile from './play-user-profile.module.css'
import logo from '../../../assets/user/login.jpg'
import Button from '../../../ui-library/button/button'
function PlayProfile(props) {
  return (
    <section className='playprofile'>
      <div className={playprofile.playprofile}>
        <div className={playprofile.flex}>
          <div className={playprofile.flex_item_user_avatar}>
            <div className={playprofile.photo_pacage}>
              <img className={playprofile.photo} src={logo} alt='rival' />
            </div>
          </div>
          <div className={playprofile.flex_user_body}>
            <p className={playprofile.font}>
              Name:
              <span className={playprofile.font}>{props.name}</span>
            </p>
            <p className={`${playprofile.user_victories} ${playprofile.font}`}>
              Victories:
              <span className={playprofile.user_victories_caunt}>100</span>
            </p>
            <p className={`${playprofile.user_best} ${playprofile.font}`}>
              Best Victories
              <Button message='WATCH' href='/pages/chesslandcoaches' />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PlayProfile
