import adventure from './adventure.module.css'
import H1 from '../../ui-library/h1/h1'
import { Col, Container, Row } from 'react-bootstrap'
function Adventure() {
  return (
    <section className='adventure'>
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <H1 message='Adventure Chess Club' primary />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Adventure
