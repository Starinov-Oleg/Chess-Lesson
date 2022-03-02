import coaches from './coaches-about.module.css'
import Button from '../../../ui-library/button-link/button-link'
import logo from '../../../assets/user/login.jpg'
import H3 from '../../../ui-library/h3/h3'

function About({ message, messagebutton }) {
  const style_h3 = { fontSize: '1.5rem', padding: '1rem 1rem', color: 'black' }
  return (
    <>
      <H3 message={message} style={style_h3} />
      <img src={logo} alt='club logo' className={coaches.logo} />
      <Button message={messagebutton} href='/regcouching' />
    </>
  )
}

export default About
