import React from 'react'
import safe from './content-safe.module.css'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'

function SectionSafe({ contentSafe }) {
  return (
    <section className='safe'>
      <div className={safe.safe}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <H1 message='CARE FOR SAFE' />
              <Ul lists={contentSafe} />
              <Button message='WHAT IS CHESS LAND?' href='/pages/whatis' alt='Photo by Monstera from Pexels' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default React.memo(SectionSafe)
