import chesslearn from './chess-learn.module.css'
import Iframe from './chess-learn-video/iframe'
import Button from '../../ui-library/button-click/button'
import { useState } from 'react'
import value from '../../backend/value'
import picture from '../../assets/pages/chess-learn/learn-video.jpg'
function ChessLearn() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [showpic, setShowPic] = useState(true)

  function toggle() {
    setShow(show => (show = true))
    setShowPic(showpic => showpic == null)
    setShow2(show2 => show2 == null)
  }
  function toggle2() {
    setShow2(show2 => (show2 = true))
    setShowPic(showpic => showpic == null)
    setShow(show => show == null)
  }

  return (
    <section className='chessland'>
      <div className={chesslearn.chesslearn}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            {showpic ? (
              <div>
                <h3 className={chesslearn.title}>Watch video</h3>
                <img
                  src={picture}
                  className={chesslearn.picture}
                  alt='video here <a href=https://www.freepik.com/vectors/background>Background vector created by pch.vector - www.freepik.com</a>'
                />
              </div>
            ) : null}
            <div className={chesslearn.video}>
              {show ? <Iframe src={value.learn.video1} height='500' width='100%' /> : null}
            </div>
            <div className={chesslearn.video}>
              {show2 ? <Iframe src={value.learn.video2} height='500' width='100%' /> : null}
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className={chesslearn.start}>
              <h3 className={chesslearn.subtitles}>An Introduce to Chess:</h3>
              <p className={chesslearn.about}>Explain why Chess so awesome.</p>
              <Button message='WATCH VIDEO' onClick={toggle} />
              <h3 className={chesslearn.subtitles}>An Introduce to Chess Land:</h3>
              <p className={chesslearn.about}>What special in Chess Land.</p>
              <Button message='WATCH VIDEO' onClick={toggle2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChessLearn
