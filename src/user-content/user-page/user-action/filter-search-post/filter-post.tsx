import * as React from 'react'
import { Accordion, Card, useAccordionButton, Button } from 'react-bootstrap'
import styled from 'styled-components'
import ButtonToggle from '../../../../ui-library/button-click/button'

interface CustomToggleProps {
  children: any
  eventKey: any
}
interface Filterpostprops {
  onClick?: any
}
const StyledButtonContainer = styled.form`
  button {
    margin-left: 1rem;
  }
`
function CustomToggle({ children, eventKey }: CustomToggleProps) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'))

  return (
    <ButtonToggle message='Filter' onClick={decoratedOnClick}>
      {children}
    </ButtonToggle>
  )
}

function FilterPost({ onClick }: Filterpostprops) {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='1'> Click Me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            <StyledButtonContainer>
              <Button variant='outline-success' onClick={onClick}>
                latest
              </Button>
              <Button variant='outline-warning' onClick={onClick}>
                most
              </Button>
            </StyledButtonContainer>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
export default FilterPost
