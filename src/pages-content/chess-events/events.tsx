import styled from 'styled-components'
import { Col, Row, Container } from 'react-bootstrap'

interface EventItemsProps {
  eventsItems: Object
}
const StyledEvents = styled(Container)`
  min-height: 100vh;
`
function Events({ eventsItems }: EventItemsProps) {
  return (
    <section className='events'>
      <StyledEvents>
        <Row>
          <Col md={12} xs={12}>
            {eventsItems}
          </Col>
        </Row>
      </StyledEvents>
    </section>
  )
}
export default Events
