import form from './form-login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../ui-library/input/input'
import Label from '../../../ui-library/label/label'
function Form(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    alert(`${password}`)
    history('/')
  }
  return (
    <form
      className={form.form}
      onSubmit={e => {
        handleSubmit(e)
      }}>
      <div className='mb-3'>
        <Label message='Email address' />
        <Input
          type='email'
          value={email}
          placeholder='Here e-mail type: email@email.com'
          aria_describedby='email Help'
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <Label message='Password' />
        <Input
          type='password'
          value={password}
          placeholder=''
          aria_describedby='email Help'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className={`${form.login_button} ${form.button}`}>SUBMIT</button>
    </form>
  )
}
export default Form
