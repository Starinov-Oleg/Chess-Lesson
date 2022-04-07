import React from 'react'
import login from './login.module.css'
import logo from '../../assets/user/login.jpg'
import Form from './form/form-login'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import Button from '../../ui-library/button-register/button-register'
import HomeLink from '../../ui-library/home-link/home-link'

function onSubmit(data: any) {
  alert(JSON.stringify(data))
  let url = '/pages'
  window.location.replace(url)
}

function Login() {
  const h1 = { color: '#2aa3d3' }
  const h3 = { fontSize: '1.3rem', color: 'black' }
  return (
    <section className='login'>
      <div className={login.login}>
        <div className='container'>
          <div className={`row ${login.color}`}>
            <div className='col-md-6 col-12'>
              <HomeLink />
              <H1 message='LOGIN' style={h1} />
              <Form onSubmit={onSubmit} />
            </div>
            <div className='col-md-6 col-12'>
              <img
                src={logo}
                alt="<a href='https://www.freepik.com/vectors/background'>Background vector created by studio4rt - www.freepik.com</a>"
                className={login.logo}
              />
              <H3 message='If you dont have accaunt falow link:' style={h3} />
              <Button message='REGISTER' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
