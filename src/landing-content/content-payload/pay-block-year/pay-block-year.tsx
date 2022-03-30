import payblock from './pay-block.module.css'
import H1 from '../../../ui-library/h1/h1'
import H3 from '../../../ui-library/h3/h3'
import picture from '../../../assets/pages/chess-learn/learn-video.jpg'

function PayBlock() {
  const styleH1 = { color: '#ff6b08' }
  const styleH3 = { color: 'black', textAlign: 'left' }
  const note = { color: '#cecfcf', textAlign: 'left', fontSize: '1rem' }

  return (
    <div className={`container ${payblock.payblock}`}>
      <div className='row'>
        <div className='col-md-12 col-12'>
          <H1 message='COURSE ON ONE YEAR ->' style={styleH1} />
        </div>
        <div className='col-md-6 col-12'>
          <H3
            message='Study 1-4 times a week in one or more subjects and complete the whole class program'
            style={styleH3}
          />
          <H3 message='3 lesson for free' style={note} />
          <H3 message='50 000 Đ ' style={styleH3} />
          <H3 message='for lesson' style={note} />
        </div>
        <div className={`col-md-6 col-12 ${payblock.relativepic}`}>
          <img
            src={picture}
            className={payblock.picture}
            alt='video here <a href=https://www.freepik.com/vectors/background>Background vector created by pch.vector - www.freepik.com</a>'
          />
        </div>
      </div>
    </div>
  )
}

export default PayBlock
