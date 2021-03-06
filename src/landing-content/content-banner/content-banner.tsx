import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import img from '../../assets/section-baner/baner.jpg'
import buttonplay from '../../assets/section-baner/play.png'
import LanguagesContext from '../../common/languages/language-context'
import Button from '../../ui-library/button-pictures/button-pictures'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import BanerItemBlock from './baner-item-block/baner-item-block'

const StyledBanerBody = styled.div`
  text-align: left;
  padding-top: 1rem;
  font-family: var(--global-var-font-mocha);
`
const StyledBanerImg = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  //padding-bottom: 6rem;
  margin-top: 2%;
`
const buttonpicture = { padding: '40px', borderRadius: '10px' }
function SectionBaner() {
  const language = React.useContext(LanguagesContext)
  return (
    <section className='baner'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-left' lg={5} xs={12}>
            <StyledBanerBody>
              <H3 message={language.banerbodyH3_1.message} primary />
              <p>{language.video_text.message}</p>
              <H3 message={language.banerbodyH3_2.message} primary />
              <p>{language.interactive_text.message}</p>
              <H3 message={language.banerbodyH3_3.message} primary />
              <p>{language.class_text.message}</p>
            </StyledBanerBody>
          </Col>
          <Col lg={5} xs={12}>
            <StyledBanerImg>
              <H3 message={language.banerimgH3_1.message} primary />
              <Button img={buttonplay} width='20rem' height='1.5rem' href='chesslearn' style={buttonpicture} />
              <H1 message={language.banerimgH3_2.message} primary />
            </StyledBanerImg>
          </Col>
        </Row>
        <Row>
          <Col>
            <BanerItemBlock />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default React.memo(SectionBaner)
