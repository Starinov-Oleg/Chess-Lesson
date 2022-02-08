import login from './login.module.css'
import logo from '../../assets/user/login.jpg'
import home from '../../assets/pages/header-pages/home.png'
import { NavLink } from 'react-router-dom'
import Form from './form/form-login'
function Login() {
  return (
    <section className='login'>
      <div className={login.login}>
        <div className='container'>
          <div className={`row ${login.color}`}>
            <div className='col-md-6 col-12'>
              <h1 className={`${login.title} ${login.color_text}`}>
                <NavLink to='/'>
                  <img src={home} alt='chess-land' className={login.icon} />
                </NavLink>
                LOGIN
              </h1>
              <Form />
            </div>
            <div className='col-md-6 col-12'>
              <img
                src={logo}
                alt="<a href='https://www.freepik.com/vectors/background'>Background vector created by studio4rt - www.freepik.com</a>"
                className={login.logo}
              />
              <h3 className='subtitle'>If you dont have accaunt falow link:</h3>
              <NavLink to='/Register' className={`${login.register} ${login.button}`}>
                REGISTER
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
