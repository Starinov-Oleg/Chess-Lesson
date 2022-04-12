import coaches from './coaches-about.module.css'
import Button from '../../../ui-library/button-link/button-link'
import logo from '../../../assets/user/login.jpg'
import H3 from '../../../ui-library/h3/h3'
import { Fragment } from 'react'
import { PaddingVerticalHorizontal } from '../../../common/styled-components/padding-margin.styled'
interface AboutProps {
  message: string
  messagebutton: string
}
function About({ message, messagebutton }: AboutProps) {
  return (
    <Fragment>
      <PaddingVerticalHorizontal>
        <H3 message={message} colorBlack />
      </PaddingVerticalHorizontal>
      <img src={logo} alt='club logo' className={coaches.logo} />
      <Button message={messagebutton} href='/regcouching' />
    </Fragment>
  )
}

export default About
