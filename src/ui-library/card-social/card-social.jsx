import cardsocial from './card-social.module.css'
import Button from '../button-click/button'
import Statistic from './statistic-block/statistic-block'
import Passport from './passport-block/passport-block'
import { NavLink } from 'react-router-dom'

//import Logo from '../logo/logo'
function CardSocial({
  style,
  text,
  src,
  alt,
  fullname,
  onClick1,
  onClick2,
  message1,
  message2,
  followed,
  showbutton,
  showpassport,
  showstatistic,
}) {
  const stylebutton = { width: '3rem', height: '3rem', padding: '0px' }
  const styleimg = { width: '100%' }
  return (
    <div className={`card ${cardsocial.card}`} style={style}>
      <NavLink to='user'>
        <img src={src} className={cardsocial.img} alt={alt} style={styleimg} />
      </NavLink>
      {showbutton ? (
        <div className={`text-center ${cardsocial.socialactive}`}>
          {followed ? (
            <Button onClick={onClick1} message={message1} style={stylebutton} />
          ) : (
            <Button onClick={onClick2} message={message2} style={stylebutton} />
          )}
        </div>
      ) : null}
      <div className='text-center'>
        <h5 className='card-title'>{fullname}</h5>
        <h5 className='card-title'>{text}</h5>
      </div>

      {showpassport ? <Passport /> : null}
      {showstatistic ? <Statistic /> : null}
    </div>
  )
}
export default CardSocial
/**HERE NEED ADD LOGO component and display different for different page */
