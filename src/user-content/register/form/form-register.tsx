import { ErrorMessage } from '@hookform/error-message'
import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Button from '../../../ui-library/button-click/button'
import Input from '../../../ui-library/input/input'
import Label from '../../../ui-library/label/label'
interface FormProps {
  onSubmit: any
  value: any
  onChange: any
  valuePass: any
  onChangePass: any
  valueName: any
  onChangeName: any
}
const StyledError = styled.p`
  color: #c25e1b;
`
const StyledButtonAling = styled.div`
  text-align: center;
`
const StyledFormAlign = styled.form`
  text-align: left;
  padding: 1rem;
`
function Form({ onSubmit, value, onChange, valuePass, onChangePass, valueName, onChangeName }: FormProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm()
  const button = { fontSize: '1.8rem', marginTop: '1rem' }
  React.useEffect(() => {
    setFocus('email')
  }, [setFocus])
  return (
    <StyledFormAlign onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6} xs={12}>
          <Label message='Email address' htmlFor='email' />
          <Input
            name='email'
            type='email'
            register={register}
            onChange={onChange}
            value={value}
            rules={{
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
          />
          <ErrorMessage errors={errors} name='email' render={() => <StyledError>Email not Correct</StyledError>} />
          <Label message='Add your nickname' htmlFor='name' />
          <Input
            type='text'
            name='name'
            register={register}
            rules={{ required: true }}
            onChange={onChangeName}
            value={valueName}
          />
          <ErrorMessage errors={errors} name='name' render={() => <StyledError>Empty Field</StyledError>} />
        </Col>
        <Col md={6} xs={12}>
          <Label message='Password' htmlFor='password' />
          <Input
            type='password'
            name='password'
            register={register}
            rules={{ required: true }}
            onChange={onChangePass}
            value={valuePass}
          />
          <ErrorMessage errors={errors} name='password' render={() => <StyledError>Empty Field</StyledError>} />
        </Col>
        <StyledButtonAling>
          <Button message='REGISTER' style={button} />
        </StyledButtonAling>
      </Row>
    </StyledFormAlign>
  )
}
export default Form
