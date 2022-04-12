import about from './learn-about-video.module.css'
import H3 from '../../../ui-library/h3/h3'
import Button from '../../../ui-library/button-click/button'
import '../../../common/vars-css.css'
import { PaddingVerticalHorizontal } from '../../../common/styled-components/padding-margin.styled'

interface AboutProps {
  message: string
  textMessage: string
  onClick: () => void
}
function About({ message, textMessage, onClick }: AboutProps) {
  const style_h3 = { padding: '1rem 1rem' }
  return (
    <>
      <PaddingVerticalHorizontal>
        <H3 message={message} primary />
      </PaddingVerticalHorizontal>

      <p className={about.about}>{textMessage}</p>
      <Button message='WATCH VIDEO' onClick={onClick} />
    </>
  )
}

export default About
