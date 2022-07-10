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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [realName, setRealName] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(new Date())

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
                queryaddemail.mutate({ email, password, name, realName, startDate })
              })}
              value={email}
              valuePass={password}
              valueName={name}
              valueRealName={realName}
              selected={startDate}
              onChange={(event: { target: { value: string } }) => {
                setEmail(event.target.value)
              }}
              onChangePass={(event: { target: { value: string } }) => {
                setPassword(event.target.value)
              }}
              onChangeName={(event: { target: { value: string } }) => {
                setName(event.target.value)
              }}
              onChangeRealName={(event: { target: { value: string } }) => {
                setRealName(event.target.value)
              }}
              onChangeData={(date: React.SetStateAction<Date | null>) => setStartDate(date)}
            />
          </StyledRegisterContainer>
        </StyledRegister>
      )}
    </>
  )
}
export default Register
