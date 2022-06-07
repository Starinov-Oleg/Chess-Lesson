import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

import Form from './register-form/form'

function onSubmit(data: any) {
  alert(JSON.stringify(data))
  let url = '/'
  window.location.replace(url)
}
function RegisterCouch() {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <Form onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default RegisterCouch
