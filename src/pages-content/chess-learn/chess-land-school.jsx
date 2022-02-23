import chesslearn from './chess-learn.module.css'
import Iframe from './chess-learn-video/iframe'
import { useState } from 'react'
import Cover from './chess-learn-cover-video/learn-cover-video'
import About from './chess-learn-about-video/learn-about-video'

function toggle(setShow, setShowPic, setShow2) {
  setShow(true)
  setShowPic(null)
  setShow2(null)
}
function toggle2(setShow, setShowPic, setShow2) {
  setShow2(true)
  setShowPic(null)
  setShow(null)
}
function ChessLearn(props) {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [showpic, setShowPic] = useState(true)

  return (
    <section className='chessland'>
      <div className={chesslearn.chesslearn}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <div className={chesslearn.video}>
              {showpic ? <Cover /> : null}
              {show ? <Iframe src={props.learn.video1} height='500' width='100%' /> : null}

              {show2 ? <Iframe src={props.learn.video2} height='500' width='100%' /> : null}
            </div>
          </div>
          <div className={`col-md-4 col-12 ${chesslearn.background_color}`}>
            <div className={`sticky-top ${chesslearn.start}`}>
              <About
                message='An Introduce to Chess:'
                textMessage='Explain why Chess so awesome.'
                onClick={() => {
                  toggle(setShow, setShowPic, setShow2)
                }}
              />
              <About
                message='An Introduce to Chess Land:'
                textMessage='What special in Chess Land.'
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
