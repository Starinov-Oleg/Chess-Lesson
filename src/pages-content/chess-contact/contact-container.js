import picture from '../../assets/pages/chess-play/user.png'
import { useSelector } from 'react-redux'
import Contact from './contact'
import Card from '../../ui-library/card/card'
function ContactContainerView() {
  const contacts = useSelector(state => state.contacts)
  const cardItems = contacts.map(contact => (
    <div className='col-md-3 col-12 ' key={contact.id}>
      <Card
        fullname={contact.name}
        text={contact.text}
        alt='picture'
        src={contact.picture != null ? contact.picture : picture}
      />
    </div>
  ))

  return <Contact cardItems={cardItems} />
}
export default ContactContainerView
