import playprofile from './play-user-profile.module.css'
import Logo from '../../../ui-library/logo/logo'
import Statistic from '../../../ui-library/statistic/statistic'
function PlayProfile() {
  return (
    <section className='playprofile'>
      <div className={playprofile.playprofile}>
        <div className={playprofile.flex}>
          <div className={playprofile.flex_item_user_avatar}>
            <Logo />
          </div>
          <div className={playprofile.flex_user_body}>
            <Statistic />
          </div>
        </div>
      </div>
    </section>
  )
}
export default PlayProfile
