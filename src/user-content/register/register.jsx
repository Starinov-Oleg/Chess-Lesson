import register from './register.module.css'
import home from '../../assets/pages/header-pages/home.png'
import { NavLink } from 'react-router-dom'
import Form from './form/form-register'
import H1 from '../../ui-library/h1/h1'
function Register() {
  const h1 = { color: '#2aa3d3' }
  return (
    <section className='register'>
      <div className={register.register}>
        <div className={`container ${register.color}`}>
          <div className='row'>
            <div className='col-md-3 col-12'>
              <NavLink to='/'>
                <img src={home} alt='chess-land' className={register.icon} />
              </NavLink>
            </div>
            <div className='col-md-3 col-12'>
              <H1 message='REGISTER' style={h1} />
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}
export default Register
