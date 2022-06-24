import { ErrorMessage } from '@hookform/error-message'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Button from '../../../ui-library/button-click/button'
import Input from '../../../ui-library/input/input'
import Label from '../../../ui-library/label/label'

interface FormProps {
  onSubmit: any
}
const StyledError = styled.p`
  color: #c25e1b;
`
const StyledLoginForm = styled.form`
  text-align: left;
`
function Form({ onSubmit }: FormProps) {
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const button = { fontSize: '1.8rem', marginTop: '1rem' }
  React.useEffect(() => {
    setFocus('email')
  }, [setFocus])
  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Label message='Email address' htmlFor='email' />
      <Input
        name='email'
        id='email'
        register={register}
        rules={{
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Invalid email',
        }}
        type='email'
      />

      <ErrorMessage
        errors={errors}
        name='email'
        render={() => <StyledError role='alert'>Email not Correct</StyledError>}
      />

      <Label message='Password' htmlFor='password' />
      <Input
        id='password'
        type='password'
        name='password'
        register={register}
        rules={{
          required: true,
          minLength: {
            value: 5,
            message: 'min length is 5',
          },
        }}
      />
      <ErrorMessage
        errors={errors}
        name='password'
        render={() => <StyledError role='alert'>Empty Field</StyledError>}
      />

      <Button message='SUBMIT' style={button} type='submit' />
    </StyledLoginForm>
  )
}
export default Form
