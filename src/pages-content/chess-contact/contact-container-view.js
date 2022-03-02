import picture from '../../assets/pages/chess-play/user.png'
import { useSelector } from 'react-redux'
import Contact from './contact'
import CardSocial from '../../ui-library/card-social/card-social'
function ContactContainerView(props) {
  //const pageCount = Math.ceil(props.users.totalUserCount / props.users.pageSize) // for count friends on page
  // const pages=[];
  /**
   * for (const i=1; i<=pageCount; i++){
   *  pages.push(i);
   * }
   */
  const contacts = useSelector(state => state.contacts)
  const cardItems = contacts.map(contact => (
    <div className='col-md-3 col-12 ' key={contact.id}>
      <CardSocial
        fullname={contact.name}
        text={contact.text}
        alt='picture'
        src={contact.picture != null ? contact.picture : picture}
      />
    </div>
  ))
  const couchItems = props.users.map(user => (
    <div className='col-md-3 col-12 ' key={user.id}>
      <CardSocial
        fullname={user.fullname}
        message1='Unfollow'
        followed={user.followed}
        message2='Follow'
        alt='picture'
        showbutton
        src={user.picture != null ? user.picture : picture}
        onClick1={() => {
          props.unfollow(user.id)
        }}
        onClick2={() => {
          props.follow(user.id)
        }}
      />
    </div>
  ))
  return <Contact cardItems={cardItems} couchItems={couchItems} />
}
export default ContactContainerView

/**TODO guard for friedns and couches, add component for it */
