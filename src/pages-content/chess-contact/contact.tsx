import contact from './contact.module.css'
import H3 from '../../ui-library/h3/h3'
import CommonFriends from '../../common/common-friends-block/common-friends'
import CommonCouch from '../../common/common-couch-block/common-couch'
import H1 from '../../ui-library/h1/h1'
import { MarginStyled, MarginBottom } from '../../common/styled-components/padding-margin.styled'

interface CardProps {
  cardItems: any
}

function Contact({ cardItems }: CardProps) {
  const hotline = {
    boxShadow: '0 0 2rem var(--global-var-color-note)',
    border: '10px',
    padding: '1rem',
  }
  return (
    <section className='contact'>
      <div className={contact.contact}>
        <MarginBottom>
          <H1 message='Introduce With Club' primary />
        </MarginBottom>

        <div className='row justify-content-center '>{cardItems}</div>
        <MarginStyled>
          <H1 message='HOT LINE + 0923234243434' style={hotline} primary />
        </MarginStyled>
        <div className={`${contact.align}`}>
          <H3 message='Introduce With Coaches' primary />
          <div className={contact.alignBlock}>
            <CommonCouch />
          </div>
          <H3 message='Your Friends' colorBlack primary />
          <div className={contact.alignBlock}>
            <CommonFriends />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact

/**TODO guard for friedns and couches, add component for it */
