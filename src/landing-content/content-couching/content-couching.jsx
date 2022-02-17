import couch from './content-couching.module.css'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'

function SectionCouching(props) {
  return (
    <section className='school-couching'>
      <div className={couch.couch}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-12'>
              <H1 message='COACHING FOR KIDS' />
            </div>
            <div className='col-lg-6 col-12'>
              <Ul lists={props.contentCouching} />
              <Button message='CHESS LAND COACHES' href='/pages/chesslandcoaches' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionCouching
