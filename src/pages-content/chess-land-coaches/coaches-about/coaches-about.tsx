import coaches from './coaches-about.module.css'
import Button from '../../../ui-library/button-link/button-link'
import logo from '../../../assets/user/login.jpg'
import H3 from '../../../ui-library/h3/h3'
import { Fragment } from 'react'
import '../../../common/vars-css.css'
interface AboutProps {
  message: string
  messagebutton: string
}
function About({ message, messagebutton }: AboutProps) {
  const style_h3 = { fontSize: '1.5rem', padding: '1rem 1rem', color: 'var(--global-var-color-black)' }
  return (
    <Fragment>
      <H3 message={message} style={style_h3} />
      <img src={logo} alt='club logo' className={coaches.logo} />
      <Button message={messagebutton} href='/regcouching' />
    </Fragment>
  )
}

export default About
