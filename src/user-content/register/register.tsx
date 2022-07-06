import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import useAddUser from '../../hooks/register-hook'
import H1 from '../../ui-library/h1/h1'
import HomeLink from '../../ui-library/home-link/home-link'
import Form from './form/form-register'

function onSubmit() {
  const url = '/'
  window.location.replace(url)
}

const StyledRegister = styled.div`
  background-color: #a4c8e7;
  padding: 1rem 0rem 1rem;
  height: 100vh;
`
const StyledRegisterContainer = styled(Container)`
  background-color: white;
`
function Register() {
  const { handleSubmit } = useForm()
  const [text, setText] = useState('')
  const [textpass, setPass] = useState('')
  const queryaddemail = useAddUser()

  return (
    <>
      {queryaddemail.isSuccess ? (
        onSubmit()
      ) : (
        <StyledRegister>
          <StyledRegisterContainer>
            <Row>
              <Col md={3} xs={12}>
                <HomeLink />
              </Col>
              <Col md={3} xs={12}>
                <H1 message='REGISTER' primary />
              </Col>
            </Row>
            <Form
              onSubmit={handleSubmit(() => {
                queryaddemail.mutate(text)
              })}
              value={text}
              onChange={(event: { target: { value: string } }) => {
                setText(event.target.value)
              }}
            />
          </StyledRegisterContainer>
        </StyledRegister>
      )}
    </>
  )
}
export default Register
