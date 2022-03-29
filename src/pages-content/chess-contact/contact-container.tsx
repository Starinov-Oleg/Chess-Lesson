import picture from '../../assets/pages/chess-play/user.png'
import { useSelector, RootStateOrAny } from 'react-redux'
import Contact from './contact'
import Card from '../../ui-library/card/card'
import { Key } from 'react'
function ContactContainerView() {
  const contacts = useSelector((state: RootStateOrAny) => state.contacts)
  const cardItems = contacts.map((contact: { id: Key | null | undefined; name: string; text: string; picture: string | null }) => (
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
