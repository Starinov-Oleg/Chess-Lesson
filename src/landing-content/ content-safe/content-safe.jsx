import safe from './content-safe.module.css'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'

function SectionSafe() {
  return (
    <section className='safe'>
      <div className={safe.safe}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div className='titles'>
                <H1 message='CARE FOR SAFE' />
                <Ul
                  li0='Activity report'
                  li1='Non stop contact with cauch and teacher'
                  li2='Only kids content'
                  li3='Attention to every child'
                />
                <Button message='WHAT IS CHESS LAND?' href='/pages/whatis' alt='Photo by Monstera from Pexels' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionSafe
