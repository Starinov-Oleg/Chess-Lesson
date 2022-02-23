import Card from '../../ui-library/card/card'
import picture from '../../assets/pages/chess-play/user.png'
import { useSelector } from 'react-redux'
import Contact from './contact'
function ContactContainer() {
  const contacts = useSelector(state => state.contacts)
  const cardItems = contacts.map(contact => (
    <div className='col-md-3 col-12 ' key={contact.id}>
      <Card title={contact.name} text={contact.text} alt='picture' src={picture} />
    </div>
  ))
  return <Contact cardItems={cardItems} />
}
export default ContactContainer

/**TODO guard for friedns and couches, add component for it */
