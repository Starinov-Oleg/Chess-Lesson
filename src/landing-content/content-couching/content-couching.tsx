import React from 'react'
import couch from './content-couching.module.css'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'
import CouchSay from './couch-say/couch-say'

interface contentCouchingProps {
  contentCouching: Array<string>
}
function SectionCouching({ contentCouching }: contentCouchingProps) {
  return (
    <section className='school-couching'>
      <div className={couch.couch}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <div className={couch.centerAlign}>
                <H1 message='COACHING FOR KIDS' />
                <Ul lists={contentCouching} />
                <Button message='CHESS LAND COACHES' href='chesslandcoaches' />
              </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className={couch.couchsay}>
                <CouchSay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default React.memo(SectionCouching)
