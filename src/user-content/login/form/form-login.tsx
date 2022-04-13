import * as React from 'react'
import form from './form-login.module.css'
import Input from '../../../ui-library/input/input'
import Label from '../../../ui-library/label/label'
import { useForm } from 'react-hook-form'
import Button from '../../../ui-library/button-click/button'
import { ErrorMessage } from '@hookform/error-message'
import { TextAlignLeft } from '../../../common/styled-components/position.styled'
import { PaddingLeft, PaddingTop } from '../../../common/styled-components/padding-margin.styled'
interface FormProps {
  onSubmit: any
}

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
    <PaddingLeft>
      <PaddingTop>
        <TextAlignLeft>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label message='Email address' htmlFor='email' />
            <Input
              name='email'
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
              render={() => <p className={form.errors}>Email not Correct</p>}
            />
            <Label message='Password' htmlFor='password' />
            <Input type='password' name='password' register={register} rules={{ required: true }} />
            <ErrorMessage errors={errors} name='password' render={() => <p className={form.errors}>Empty Field</p>} />

            <Button message='SUBMIT' style={button} />
          </form>
        </TextAlignLeft>
      </PaddingTop>
    </PaddingLeft>
  )
}
export default Form
