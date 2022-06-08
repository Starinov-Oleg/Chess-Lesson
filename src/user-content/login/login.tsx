import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import logo from '../../assets/user/login.jpg'
import { FontSize1rem } from '../../common/styled-components/font-size.styled'
import AuthService from '../../services/auth.service'
import Button from '../../ui-library/button-register/button-register'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import HomeLink from '../../ui-library/home-link/home-link'
import Form from './form/form-login'

const StyledLogin = styled.div`
  background-color: #a4c8e7;
  padding: 1rem 0rem 1rem;
`
const StyledloginContainer = styled(Container)`
  background-color: white;
`
const StyledImage = styled.img`
  width: 100%;
`
function Login() {
  function onSubmit(data: any) {
    AuthService.login(data).then(() => {
      JSON.stringify(data)
      let url = '/pages'
      window.location.replace(url)
    })
  }
  return (
    <StyledLogin>
      <StyledloginContainer>
        <Row>
          <Col md={6} xs={12}>
            <HomeLink />
            <H1 message='LOGIN' primary />
            <Form onSubmit={onSubmit} />
          </Col>
          <Col md={6} xs={12}>
            <StyledImage
              src={logo}
              alt="<a href='https://www.freepik.com/vectors/background'>Background vector created by studio4rt - www.freepik.com</a>"
            />
            <FontSize1rem>
              <H3 message='If you dont have accaunt falow link:' colorBlack />
            </FontSize1rem>
            <Button message='REGISTER' />
          </Col>
        </Row>
      </StyledloginContainer>
    </StyledLogin>
  )
}
export default Login
