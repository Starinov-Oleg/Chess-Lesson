import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import img from '../../assets/section-safe/back.jpg'
import LanguagesContext from '../../common/languages/language-context'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'
/**interface SectionSafeProps {
  contentSafe: Array<string>
} */

const StyledSection = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 20px;
  text-align: left;
`

function SectionSafe(/*{ contentSafe }: SectionSafeProps*/) {
  const language = React.useContext(LanguagesContext)

  return (
    <section className='safe'>
      <StyledSection>
        <Container>
          <Row>
            <Col>
              <H1 message={language.titleH1.message} colorWhite />
              <Ul lists={language.contentSafe.lists} />
              <Button message={language.button.message} href='whatis' />
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </section>
  )
}
export default React.memo(SectionSafe)
