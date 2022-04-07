import React from 'react'
import baner from './content-banner.module.css'
import ButtonPlay from '../../ui-library/button-play/button-play'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import BanerItemBlock from './baner-item-block/baner-item-block'
import '../../common/vars-css.css'
function SectionBaner() {
  const style_h3 = { padding: '2rem 0rem 0rem' }
  const style_h1 = { color: 'var(--global-var-color-blue)' }
  const video_text =
    'Watch many clips for study in anytime, anywhere. CLub clips from popular videohosting and from own videoplayer.'
  const interactive_text =
    'Original interactive lesson with own platforms. This help study yourself in anytime. Every lesson develop special for club and platform.'
  const class_text =
    'Study in club with couch and parents valanteurs. In club work professional couch and IT specialist.'
  return (
    <section className='baner'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-lg-5 col-12 text-left'>
            <div className={baner.baneritem}>
              <H3 message='Free Study Video' style={style_h3} />
              <p className={baner.banernote}>{video_text}</p>
              <H3 message='Interactive Lesson' style={style_h3} />
              <p className={baner.banernote}>{interactive_text}</p>
              <H3 message='Study in Class' style={style_h3} />
              <p className={baner.banernote}>{class_text}</p>
            </div>
          </div>
          <div className='col-lg-5 col-12'>
            <div className={baner.baner}>
              <H3 message='CHESS?' primary />
              <H1 message='LEARN NOW' style={style_h1} />
              <ButtonPlay href='chesslearn' />
            </div>
          </div>
          <div className='col-lg-12 col-12'>
            <BanerItemBlock />
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(SectionBaner)
