import contact from './contact.module.css'
import Card from '../../ui-library/card/card'
import picture from '../../assets/pages/chess-play/user.png'
import Button from '../../ui-library/button-link/button-link'
import { useSelector } from 'react-redux'
import H3 from '../../ui-library/h3/h3'
function Contact() {
  const contacts = useSelector(state => state.contacts)
  const cardItems = contacts.map(contact => (
    <div className='col-md-3 col-12 ' key={contact.id}>
      <Card title={contact.name} text={contact.text} alt='picture' src={picture} />
    </div>
  ))
  return (
    <section className='contact'>
      <div className={contact.contact}>
        <div className={contact.club}>
          <div className='row'>
            <div className='col-md-12 col-12 '>
              <H3 message='Introduce With Club' />
            </div>
            <div className='row justify-content-center '>{cardItems}</div>
          </div>
        </div>
        <div className={`${contact.align}`}>
          <div className='row'>
            <div className='col-md-12 col-12 '>
              <H3 message='Introduce With Coaches' />
              <Button href='/Login' message='LOGIN' />
            </div>
          </div>
        </div>
        <div className={`${contact.align}`}>
          <H3 message='Your Friends' />
          <Button href='/Login' message='LOGIN' />
        </div>
      </div>
    </section>
  )
}
export default Contact

/**TODO guard for friedns and couches, add component for it */
