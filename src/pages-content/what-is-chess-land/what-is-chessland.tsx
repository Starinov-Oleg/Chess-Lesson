import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import styled from 'styled-components'

import H3 from '../../ui-library/h3/h3'

const StyledBody = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 1rem;
  font-family: 'Mochiy';
`
function WhatIsChessland() {
  return (
    <section className='whatis'>
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <H3 message='What is Chess Land?' primary />
            <StyledBody>
              <p>Here idea about ChessLand</p>
              <ul>
                <li>1</li>
                <li>2</li>
              </ul>
            </StyledBody>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhatIsChessland
