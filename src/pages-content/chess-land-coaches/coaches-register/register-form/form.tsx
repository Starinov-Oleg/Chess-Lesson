import React from 'react'
import Input from '../../../../ui-library/input/input'
import Label from '../../../../ui-library/label/label'
import { useForm } from 'react-hook-form'
import Button from '../../../../ui-library/button-click/button'
import { ErrorMessage } from '@hookform/error-message'
import styled from 'styled-components'

const StyledForm = styled.form`
  text-align: left;
  padding: 2rem 1rem;
`
const StyledErrors = styled.p`
  color: #c25e1b;
`
interface FormProp {
  onSubmit: any
}
function Form({ onSubmit }: FormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const button = { fontSize: '1.8rem', marginTop: '1rem' }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label message='Email address' htmlFor={undefined} />
      <Input
        name='email'
        register={register}
        rules={{
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Invalid email',
        }}
        type={''}
      />
      <ErrorMessage errors={errors} name='email' render={() => <StyledErrors>Email not Correct</StyledErrors>} />
      <Label message='Password' htmlFor={undefined} />
      <Input type='password' name='password' register={register} rules={{ required: true }} />
      <ErrorMessage errors={errors} name='password' render={() => <StyledErrors>Empty Field</StyledErrors>} />

      <Button message='SUBMIT' style={button} />
    </StyledForm>
  )
}
export default Form
