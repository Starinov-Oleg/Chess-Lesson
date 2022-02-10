import contact from './contact.module.css'
import Card from '../../ui-library/card/card'
import picture from '../../assets/pages/chess-play/user.png'
import Button from '../../ui-library/button-link/button-link'
import value from '../../backend/value'
import picturecoaches from '../../assets/pages/chess-contact/coaches.jpg'
import picturestudent from '../../assets/pages/chess-contact/friend.jpg'
function Contact() {
  return (
    <section className='contact'>
      <div className={contact.contact}>
        <div className={contact.club}>
          <div className='row justify-content-center'>
            <div className='col-md-12 col-12 '>
              <h3 className={contact.title}>Introduce With Club</h3>
            </div>
            <div className='col-md-3 col-12 '>
              <Card
                title={value.contact.teacher1.name}
                text={value.contact.teacher1.text}
                alt='picture'
                src={picture}
              />
            </div>
            <div className='col-md-3 col-12 '>
              <Card
                title={value.contact.teacher2.name}
                text={value.contact.teacher2.text}
                alt='picture'
                src={picture}
              />
            </div>
          </div>
        </div>
        <div className={contact.coaches}>
          <div className='row'>
            <div className='col-md-12 col-12 '>
              <h3 className={contact.title}>Introduce With Coaches</h3>
              <img
                src={picturecoaches}
                className={contact.picture}
                alt='coaches-logo <a href=https://www.freepik.com/vectors/business>Business vector created by katemangostar - www.freepik.com</a>'
              />
              <Button href='/Login' message='LOGIN' />
            </div>
          </div>
        </div>
        <div className={contact.friend}>
          <h3 className={contact.title}>Your Friends</h3>
          <img
            src={picturestudent}
            className={contact.picture}
            alt='friend-logo <a href=https://www.freepik.com/vectors/school>School vector created by felicities - www.freepik.com</a>'
          />
          <Button href='/Login' message='LOGIN' />
        </div>
      </div>
    </section>
  )
}
export default Contact

/**TODO guard for friedns and couches, add component for it */
