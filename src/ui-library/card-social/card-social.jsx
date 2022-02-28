import cardsocial from './card-social.module.css'
import Button from '../button-click/button'
//import Logo from '../logo/logo'
function CardSocial({
  style,
  src,
  alt,
  fullname,
  text,
  location,
  contact,
  position,
  win,
  lose,
  onClick1,
  onClick2,
  message1,
  message2,
  followed,
}) {
  return (
    <div className={`card text-center ${cardsocial.card}`} style={style}>
      <img src={src} className='card-img-top' alt={alt} />

      <div className='card-body'>
        <h5 className='card-title'>{fullname}</h5>
        <p className='card-text'>{text}</p>
      </div>
      <div className={cardsocial.passport}>
        <h5>{location}</h5>
        <h5>{contact}</h5>
        <h5>{position}</h5>
        <h5>Win: {win}</h5>
        <h5>Lose: {lose}</h5>
      </div>
      <div className={cardsocial.socialactive}>
        {followed ? (
          <Button onClick={onClick1} style={style} message={message1} />
        ) : (
          <Button onClick={onClick2} style={style} message={message2} />
        )}
      </div>
    </div>
  )
}
export default CardSocial
/**HERE NEED ADD LOGO component and display different for different page */
