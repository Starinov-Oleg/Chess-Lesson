import chesslearn from './chess-learn.module.css'
import Iframe from './chess-learn-video/iframe'
import Button from '../../ui-library/button-click/button'
import { useState } from 'react'
function ChessLearn() {
  const iframe =
    '<iframe height="265" style="width: 100%;" scrolling="no" title="video" src="https://www.youtube.com/embed/OZWRM2WG8Kg" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
  const iframe2 =
    '<iframe height="265" style="width: 100%;" scrolling="no" title="video" src="https://www.youtube.com/embed/OZWRM2WG8Kg" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  return (
    <section className='chessland'>
      <div className={chesslearn.chesslearn}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <div className={chesslearn.video}>{show ? <Iframe iframe={iframe} /> : null}</div>
            <div className={chesslearn.video}>{show2 ? <Iframe iframe={iframe2} /> : null}</div>
          </div>
          <div className='col-md-4 col-12'>
            <div className={chesslearn.start}>
              <h3 className={chesslearn.subtitles}>An Introduce to Chess:</h3>
              <p className={chesslearn.about}>Explain why Chess so awesome.</p>
              <Button message='WATCH VIDEO' onClick={() => setShow(!show) && setShow2(show2)} />
              <h3 className={chesslearn.subtitles}>An Introduce to Chess Land:</h3>
              <p className={chesslearn.about}>What special in Chess Land.</p>
              <Button message='WATCH VIDEO' onClick={() => setShow2(!show2) && setShow(show)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChessLearn
