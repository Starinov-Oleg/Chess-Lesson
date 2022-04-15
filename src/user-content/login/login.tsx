import React from 'react'
import login from './login.module.css'
import logo from '../../assets/user/login.jpg'
import Form from './form/form-login'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import Button from '../../ui-library/button-register/button-register'
import HomeLink from '../../ui-library/home-link/home-link'
import { FontSize1rem } from '../../common/styled-components/font-size.styled'
import AuthService from '../../services/auth.service'

function Login() {
  function onSubmit(data: any) {
    AuthService.login(data).then(() => {
      JSON.stringify(data)
      let url = '/pages'
      window.location.replace(url)
    })
  }
  return (
    <section className='login'>
      <div className={login.login}>
        <div className='container'>
          <div className={`row ${login.color}`}>
            <div className='col-md-6 col-12'>
              <HomeLink />
              <H1 message='LOGIN' primary />
              <Form onSubmit={onSubmit} />
            </div>
            <div className='col-md-6 col-12'>
              <img
                src={logo}
                alt="<a href='https://www.freepik.com/vectors/background'>Background vector created by studio4rt - www.freepik.com</a>"
                className={login.logo}
              />
              <FontSize1rem>
                <H3 message='If you dont have accaunt falow link:' colorBlack />
              </FontSize1rem>
              <Button message='REGISTER' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
