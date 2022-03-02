import cardsocial from './card-social.module.css'
import Button from '../button-click/button'
import Statistic from './statistic-block/statistic-block'
import Passport from './passport-block/passport-block'
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
  return (
    <div className={`card ${cardsocial.card}`} style={style}>
      <img src={src} className={cardsocial.img} alt={alt} />
      <div className='text-center'>
        <h5 className='card-title'>{fullname}</h5>
        <h5 className='card-title'>{text}</h5>
      </div>

      {showpassport ? <Passport /> : null}
      {showstatistic ? <Statistic /> : null}
      {showbutton ? (
        <div className={`text-center ${cardsocial.socialactive}`}>
          {followed ? (
            <Button onClick={onClick1} style={style} message={message1} />
          ) : (
            <Button onClick={onClick2} style={style} message={message2} />
          )}
        </div>
      ) : null}
    </div>
  )
}
export default CardSocial
/**HERE NEED ADD LOGO component and display different for different page */
