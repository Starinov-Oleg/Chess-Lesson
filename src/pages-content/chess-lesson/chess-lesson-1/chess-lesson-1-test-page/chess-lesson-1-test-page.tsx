import Button from '../../../../ui-library/button-link/button-link'
import { Col, Row, Container } from 'react-bootstrap'
import CardTest from '../../../../ui-library/card-test/card-test'
import CardTestResult from '../../../../ui-library/card-test/card-test-result'
function ChessLessonTestPage() {
  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          <CardTest title='Test move piece' description='here text about test' />
          <CardTestResult />
          <Button message='Back on Lesson page>>' href='/chesslesson' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLessonTestPage
