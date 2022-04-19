import React from 'react'
import ButtonPlay from '../../ui-library/button-play/button-play'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import BanerItemBlock from './baner-item-block/baner-item-block'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import img from '../../assets/section-baner/baner.jpg'
function SectionBaner() {
  const video_text =
    'Watch many clips for study in anytime, anywhere. CLub clips from popular videohosting and from own videoplayer.'
  const interactive_text =
    'Original interactive lesson with own platforms. This help study yourself in anytime. Every lesson develop special for club and platform.'
  const class_text =
    'Study in club with couch and parents valanteurs. In club work professional couch and IT specialist.'
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
    padding-top: 25%;
  `
  return (
    <section className='baner'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-left' lg={5} xs={12}>
            <StyledBanerBody>
              <H3 message='Free Study Video' primary />
              <p>{video_text}</p>
              <H3 message='Interactive Lesson' primary />
              <p>{interactive_text}</p>
              <H3 message='Study in Class' primary />
              <p>{class_text}</p>
            </StyledBanerBody>
          </Col>
          <Col lg={5} xs={12}>
            <StyledBanerImg>
              <H3 message='CHESS?' primary />
              <H1 message='LEARN NOW' primary />
              <ButtonPlay href='chesslearn' />
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
