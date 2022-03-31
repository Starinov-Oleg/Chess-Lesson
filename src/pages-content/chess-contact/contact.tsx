import contact from './contact.module.css'
import H3 from '../../ui-library/h3/h3'
import FriendsContainer from '../../common/friends-block/friends-container'
import CouchContainer from '../../common/couch-block/couch-container'
import H1 from '../../ui-library/h1/h1'
interface CardProps {
  cardItems: any
}
function Contact({ cardItems }: CardProps) {
  const style_h1 = { color: '#2aa3d3', marginBottom: '2rem' }
  return (
    <section className='contact'>
      <div className={contact.contact}>
        <H1 message='Introduce With Club' style={style_h1} />
        <div className='row justify-content-center '>{cardItems}</div>
        <div className={`${contact.align}`}>
          <H3 message='Introduce With Coaches' />
          <div className={contact.alignBlock}>
            <CouchContainer />
          </div>
          <H3 message='Your Friends' />
          <div className={contact.alignBlock}>
            <FriendsContainer />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact

/**TODO guard for friedns and couches, add component for it */
