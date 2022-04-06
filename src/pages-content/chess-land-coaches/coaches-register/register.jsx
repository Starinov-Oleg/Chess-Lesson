import React from 'react'
import register from './register.module.css'
import Form from './register-form/form'

function onSubmit(data) {
  alert(JSON.stringify(data))
  let url = '/'
  window.location.replace(url)
}
function RegisterCouch() {
  return (
    <section>
      <div className={register.register}>
        <div className='container'>
          <div className='col-md-12 col-12'>
            <Form onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterCouch
