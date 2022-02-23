import register from './register.module.css'
import Form from './register-form/form'
function RegisterCouch() {
  return (
    <section>
      <div className={register.register}>
        <div className='container'>
          <div className='col-md-12 col-12'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterCouch
