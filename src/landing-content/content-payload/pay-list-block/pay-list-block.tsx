import PayItem from './pay-item/pay-item'
import React from 'react'
import LanguagesContext from '../../../common/languages/language-context'
import { Container, Row, Col } from 'react-bootstrap'
/**NOW USE CONTEXT
 * const payloadlist = [
  { header: '4 lesson', body: 'Basic principles of the game', footer: '100 000 Đ' },
  {
    header: '6 lesson',
    body: 'Explore the properties of shapes',
    footer: '100 000 Đ',
    note: ' free lesson with full payment',
  },
  {
    header: '8 lesson',
    body: 'Study debuts and mistakes',
    footer: '100 000 Đ',
    note: '2 free lessons with full payment',
  },
]
 */

function PayListBlock() {
  const language = React.useContext(LanguagesContext)

  return (
    <Container>
      <Row>
        {language.payloadlist.payloadlist.map((item, index) => (
          <Col md={4} sm={12} xs={12} key={index}>
            <PayItem header={item.header} body={item.body} note={item.note} footer={item.footer} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PayListBlock
