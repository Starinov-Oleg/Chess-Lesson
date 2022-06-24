import * as React from 'react'
import { Accordion, Button,Card, useAccordionButton } from 'react-bootstrap'
import styled from 'styled-components'

import ButtonToggle from '../../../../../ui-library/button-click/button'
import H3 from '../../../../../ui-library/h3/h3'

interface CustomToggleProps {
  children: any
  eventKey: any
}
interface Filterpostprops {
  onClickData?: any
}
const StyledButtonContainer = styled.form`
  button {
    margin-left: 1rem;
  }
  H3 {
    display: inline-block;
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

function FilterPost({ onClickData }: Filterpostprops) {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='1'> Click Me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            <StyledButtonContainer>
              <H3 message='Filters:' primary />
              <Button variant='outline-warning' onClick={onClickData}>
                Data
              </Button>
            </StyledButtonContainer>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
export default FilterPost
