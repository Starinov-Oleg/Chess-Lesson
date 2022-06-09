import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

interface EventItemsProps {
  eventsItems: { [key: string]: string }
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
