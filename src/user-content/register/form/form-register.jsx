import form from './form-register.module.css'
import { useForm } from 'react-hook-form'
import Input from '../../../ui-library/input/input'
import Label from '../../../ui-library/label/label'
import Button from '../../../ui-library/button-click/button'
import { ErrorMessage } from '@hookform/error-message'

function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const button = { fontSize: '1.8rem', marginTop: '1rem' }
  return (
    <form className={form.form} onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col-md-6'>
          <Label message='Email address' />
          <Input
            name='email'
            register={register}
            rules={{
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
          />
          <ErrorMessage errors={errors} name='email' render={() => <p className={form.errors}>Email not Correct</p>} />
        </div>
        <div className='col-md-6'>
          <Label message='Password' />
          <Input type='password' name='password' register={register} rules={{ required: true }} />
          <ErrorMessage errors={errors} name='password' render={() => <p className={form.errors}>Empty Field</p>} />
        </div>
      </div>
      <div className={form.align_button}>
        <Button message='REGISTER' style={button} />
      </div>
    </form>
  )
}
export default Form
