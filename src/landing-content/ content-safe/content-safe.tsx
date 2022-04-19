import React from 'react'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import img from '../../assets/section-safe/back.jpg'
interface SectionSafeProps {
  contentSafe: Array<string>
}
const StyledSection = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 20px;
  text-align: left;
`

function SectionSafe({ contentSafe }: SectionSafeProps) {
  const titleH1 = 'CARE FOR SAFE'

  return (
    <section className='safe'>
      <StyledSection>
        <Container>
          <Row>
            <Col>
              <H1 message={titleH1} colorWhite />
              <Ul lists={contentSafe} />
              <Button message='WHAT IS CHESS LAND?' href='whatis' />
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </section>
  )
}
export default React.memo(SectionSafe)
