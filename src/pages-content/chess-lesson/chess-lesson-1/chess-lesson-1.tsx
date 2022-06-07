import { Col, Container,Row } from 'react-bootstrap'

import Button from '../../../ui-library/button-link/button-link'

function ChessLesson1Practice() {
  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          <div>Lesson1</div>
          <div>Description</div>
          <Button message='Next>>' href='cheslesson1practice' />

        </Col>
      </Row>
    </Container>
  )
}

export default ChessLesson1Practice
