import contact from './contact.module.css'
import Button from '../../ui-library/button-link/button-link'
import H3 from '../../ui-library/h3/h3'
import FriendsContainer from '../../common/friends-block/friends-container'
import CouchContainer from '../../common/couch-block/couch-container'
function Contact({ cardItems }) {
  const stylebutton = { marginTop: '1rem' }
  return (
    <section className='contact'>
      <div className={contact.contact}>
        <H3 message='Introduce With Club' />
        <div className='row justify-content-center '>{cardItems}</div>
        <div className={`${contact.align}`}>
          <H3 message='Introduce With Coaches' />
          <div className={contact.alignBlock}>
            <CouchContainer />
            <Button href='/Login' message='LOGIN' style={stylebutton} />
          </div>
          <H3 message='Your Friends' />
          <div className={contact.alignBlock}>
            <FriendsContainer />
            <Button href='/Login' message='LOGIN' style={stylebutton} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact

/**TODO guard for friedns and couches, add component for it */
