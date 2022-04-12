import React from 'react'
import register from './register.module.css'
import Form from './form/form-register'
import H1 from '../../ui-library/h1/h1'
import HomeLink from '../../ui-library/home-link/home-link'

function onSubmit(data: any) {
  alert(JSON.stringify(data))
  let url = '/'
  window.location.replace(url)
}

function Register() {
  return (
    <section className={register.register}>
      <div className={`container ${register.color}`}>
        <div className='row'>
          <div className='col-md-3 col-12'>
            <HomeLink />
          </div>
          <div className='col-md-3 col-12'>
            <H1 message='REGISTER' primary />
          </div>
        </div>
        <Form onSubmit={onSubmit} />
      </div>
    </section>
  )
}
export default Register
