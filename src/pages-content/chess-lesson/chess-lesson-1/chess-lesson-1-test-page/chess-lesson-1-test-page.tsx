import Button from '../../../../ui-library/button-link/button-link'
import { Col, Row, Container } from 'react-bootstrap'
import CardTest from '../../../../ui-library/card-test/card-test'
import CardTestResult from '../../../../ui-library/card-test/card-test-result'
import img from '../../assets/header/icon.png'
function ChessLessonTestPage() {
  const lists = [
    { id: 0, list_item_label: 'hi', list_item_img: '' },
    { id: 1, list_item_label: 'hi', list_item_img: '' },
  ]
  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          <CardTest
            title='Test move piece'
            description='here text about test'
            question='First question?'
            chose_test='checkbox'
            lists={lists}
          />
          <CardTestResult />
          <Button message='Back on Lesson page>>' href='/chesslesson' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLessonTestPage
