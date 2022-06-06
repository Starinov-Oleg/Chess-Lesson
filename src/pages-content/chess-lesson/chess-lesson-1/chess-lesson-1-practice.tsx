import Button from '../../../ui-library/button-link/button-link'
import { Col, Row, Container } from 'react-bootstrap'

function ChessLesson1Practice() {
  return (
    <Container>
      <Row className='row'>
        <Col lg={8} xs={12}>
          <div>Lesson1</div>
          <div>Description</div>
        </Col>
        <Col lg={4} xs={12}>
          <Button message='Next>>' href='#' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLesson1Practice
