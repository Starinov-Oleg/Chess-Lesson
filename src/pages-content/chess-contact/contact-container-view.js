import Card from '../../ui-library/card/card'
import picture from '../../assets/pages/chess-play/user.png'
import { useSelector } from 'react-redux'
import Contact from './contact'
import CardSocial from '../../ui-library/card-social/card-social'
function ContactContainerView(props) {
  const contacts = useSelector(state => state.contacts)
  const cardItems = contacts.map(contact => (
    <div className='col-md-3 col-12 ' key={contact.id}>
      <Card title={contact.name} text={contact.text} alt='picture' src={picture} />
    </div>
  ))
  const couchItems = props.users.map(user => (
    <div className='col-md-3 col-12 ' key={user.id}>
      <CardSocial
        fullname={user.fullname}
        message1='Unfollow'
        followed={user.followed}
        message2='Follow'
        onClick1={() => {
          props.unfollow(user.id)
        }}
        onClick2={() => {
          props.follow(user.id)
        }}
      />
      <div>{user.fullname}</div>
      <div>{user.contact}</div>
      <div>
        {user.followed ? (
          <button
            onClick={() => {
              props.unfollow(user.id)
            }}>
            UnFollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.follow(user.id)
            }}>
            Follow
          </button>
        )}
      </div>
    </div>
  ))
  return <Contact cardItems={cardItems} couchItems={couchItems} />
}
export default ContactContainerView

/**TODO guard for friedns and couches, add component for it */
