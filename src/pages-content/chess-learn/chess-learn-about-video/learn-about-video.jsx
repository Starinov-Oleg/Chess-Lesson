import about from './learn-about-video.module.css'
import H3 from '../../../ui-library/h3/h3'
import Button from '../../../ui-library/button-click/button'
function About(props) {
  const style_h3 = { fontSize: '1.5rem', padding: '1rem 1rem', color: 'black' }
  return (
    <div className={about.about}>
      <H3 message={props.message} style={style_h3} />
      <p className={about.about}>{props.textMessage}</p>
      <Button message='WATCH VIDEO' onClick={props.onClick} />
    </div>
  )
}

export default About
