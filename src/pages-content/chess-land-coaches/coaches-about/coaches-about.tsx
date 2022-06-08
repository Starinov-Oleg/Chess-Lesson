import { Fragment } from 'react'
import styled from 'styled-components'

import logo from '../../../assets/user/login.jpg'
import { PaddingVerticalHorizontal } from '../../../common/styled-components/padding-margin.styled'
import Button from '../../../ui-library/button-link/button-link'
import H3 from '../../../ui-library/h3/h3'
interface AboutProps {
  message: string
  messagebutton: string
}
const StyledLogo = styled.img`
  width: 100%;
`
function About({ message, messagebutton }: AboutProps) {
  return (
    <Fragment>
      <PaddingVerticalHorizontal>
        <H3 message={message} colorBlack />
      </PaddingVerticalHorizontal>
      <StyledLogo src={logo} alt='club logo' />
      <Button message={messagebutton} href='/regcouching' />
    </Fragment>
  )
}

export default About
