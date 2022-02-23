import cover from './learn-cover-video.module.css'
import H1 from '../../../ui-library/h1/h1'
import picture from '../../../assets/pages/chess-learn/learn-video.jpg'
function Cover() {
  const style_h1 = { color: '#2aa3d3' }
  return (
    <div className={cover.display}>
      <H1 message='Watch video' style={style_h1} />
      <img
        src={picture}
        className={cover.picture}
        alt='video here <a href=https://www.freepik.com/vectors/background>Background vector created by pch.vector - www.freepik.com</a>'
      />
    </div>
  )
}

export default Cover
