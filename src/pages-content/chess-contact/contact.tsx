import contact from './contact.module.css'
import H3 from '../../ui-library/h3/h3'
import FriendsContainer from '../../common/friends-block/friends-container'
import CouchContainer from '../../common/couch-block/couch-container'
import H1 from '../../ui-library/h1/h1'
import '../../common/vars-css.css'
import { MarginStyled } from '../../common/styled-components/padding-margin.styled'
interface CardProps {
  cardItems: any
}

function Contact({ cardItems }: CardProps) {
  const style_h1 = { marginBottom: '2rem' }
  const hotline = {
    boxShadow: '0 0 2rem var(--global-var-color-note)',
    border: '10px',
  }
  return (
    <section className='contact'>
      <div className={contact.contact}>
        <H1 message='Introduce With Club' style={style_h1} primary />

        <div className='row justify-content-center '>{cardItems}</div>
        <MarginStyled>
          <H1 message='HOT LINE + 0923234243434' style={hotline} primary />
        </MarginStyled>
        <div className={`${contact.align}`}>
          <H3 message='Introduce With Coaches' primary />
          <div className={contact.alignBlock}>
            <CouchContainer />
          </div>
          <H3 message='Your Friends' colorBlack primary />
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
