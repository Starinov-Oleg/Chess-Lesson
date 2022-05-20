import React from 'react'
import Form from './register-form/form'
import { Col, Row, Container } from 'react-bootstrap'

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
