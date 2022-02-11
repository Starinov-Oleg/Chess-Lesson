import chesslearn from './chess-learn.module.css'
import Iframe from './chess-learn-video/iframe'
import Button from '../../ui-library/button-click/button'
import { useState } from 'react'
import value from '../../backend/value'
import picture from '../../assets/pages/chess-learn/learn-video.jpg'
import H3 from '../../ui-library/h3/h3'
import H1 from '../../ui-library/h1/h1'

function toggle(setShow, setShowPic, setShow2) {
  setShow(show => (show = true))
  setShowPic(showpic => showpic == null)
  setShow2(show2 => show2 == null)
}
function toggle2(setShow, setShowPic, setShow2) {
  setShow2(show2 => (show2 = true))
  setShowPic(showpic => showpic == null)
  setShow(show => show == null)
}
function ChessLearn() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [showpic, setShowPic] = useState(true)

  const style_h3 = { fontSize: '1.5rem', padding: '1rem 1rem', color: 'black' }
  const style_h1 = { color: '#2aa3d3' }
  return (
    <section className='chessland'>
      <div className={chesslearn.chesslearn}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            {showpic ? (
              <div>
                <H1 message='Watch video' style={style_h1} />
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
          <div className={`col-md-4 col-12 ${chesslearn.background_color}`}>
            <div className={`sticky-top ${chesslearn.start}`}>
              <H3 message='An Introduce to Chess:' style={style_h3} />
              <p className={chesslearn.about}>Explain why Chess so awesome.</p>
              <Button
                message='WATCH VIDEO'
                onClick={() => {
                  toggle(setShow, setShowPic, setShow2)
                }}
              />
              <H3 message='An Introduce to Chess Land:' style={style_h3} />
              <p className={chesslearn.about}>What special in Chess Land.</p>
              <Button
                message='WATCH VIDEO'
                onClick={() => {
                  toggle2(setShow, setShowPic, setShow2)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChessLearn
