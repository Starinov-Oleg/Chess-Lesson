import register from './register.module.css'
import Form from './form/form-register'
import H1 from '../../ui-library/h1/h1'
import HomeLink from '../../ui-library/home-link/home-link'

function onSubmit(data) {
  alert(JSON.stringify(data))
  let url = '/'
  window.location.replace(url)
}

function Register() {
  const h1 = { color: '#2aa3d3' }
  return (
    <section className='register'>
      <div className={register.register}>
        <div className={`container ${register.color}`}>
          <div className='row'>
            <div className='col-md-3 col-12'>
              <HomeLink />
            </div>
            <div className='col-md-3 col-12'>
              <H1 message='REGISTER' style={h1} />
            </div>
          </div>
          <Form onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  )
}
export default Register
