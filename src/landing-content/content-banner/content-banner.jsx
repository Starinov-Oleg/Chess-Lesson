import React from 'react'
import baner from './content-banner.module.css'
import ButtonPlay from '../../ui-library/button-play/button-play'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
function SectionBaner() {
  const style_h3 = { padding: '2rem 0rem 0rem' }
  const style_h1 = { color: '#2aa3d3' }
  return (
    <section className='baner'>
      <div className={baner.baner}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-12'>
              <H3 message='CHESS?' style={style_h3} />
              <H1 message='LEARN NOW' style={style_h1} />
              <ButtonPlay className={baner.play} href='/pages/chesslearn' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(SectionBaner)
