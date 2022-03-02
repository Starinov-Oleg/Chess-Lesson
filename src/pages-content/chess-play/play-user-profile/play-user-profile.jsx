import playprofile from './play-user-profile.module.css'

import CardSocial from '../../../ui-library/card-social/card-social'
import picture from '../../../assets/pages/chess-play/user.png'

function PlayProfile() {
  return (
    <section className='playprofile'>
      <div className={playprofile.playprofile}>
        <div className={playprofile.flex}>
          <CardSocial
            fullname='Rival'
            message1='Unfollow'
            followed='no'
            message2='Follow'
            alt='picture'
            showbutton
            showstatistic
            src={picture}
          />
        </div>
      </div>
    </section>
  )
}
export default PlayProfile
