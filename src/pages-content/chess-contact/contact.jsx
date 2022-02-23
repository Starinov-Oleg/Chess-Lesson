import contact from './contact.module.css'
import Button from '../../ui-library/button-link/button-link'
import H3 from '../../ui-library/h3/h3'
function Contact({ cardItems }) {
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
          <H3 message='Introduce With Coaches' />
          <Button href='/Login' message='LOGIN' />
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
