import { Col, Container, Row } from 'react-bootstrap'

import { PaddingTop } from '../../../common/styled-components/padding-margin.styled'
import Button from '../../../ui-library/button-link/button-link'
import H3 from '../../../ui-library/h3/h3'
function ChessLesson1Practice() {
  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          <PaddingTop>
            <H3 message='Lesson1' primary />
          </PaddingTop>
          <div>Description</div>
          <Button message='Next>>' href='cheslesson1practice' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLesson1Practice
