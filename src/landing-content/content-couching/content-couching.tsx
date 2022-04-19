import React from 'react'

import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'
import CouchSay from './couch-say/couch-say'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import img from '../../assets/section-couch/back.jpg'
interface contentCouchingProps {
  contentCouching: Array<string>
}
const StyledCouchBody = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 20%;
`
const StyledCouchSay = styled.div`
  margin-top: 50%;
`
const StyledCouchIntro = styled.div`
  margin-top: 25%;
  text-align: left;
`
function SectionCouching({ contentCouching }: contentCouchingProps) {
  return (
    <section className='school-couching'>
      <StyledCouchBody>
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <StyledCouchIntro>
                <H1 message='COACHING FOR KIDS' colorWhite />
                <Ul lists={contentCouching} />
                <Button message='CHESS LAND COACHES' href='chesslandcoaches' />
              </StyledCouchIntro>
            </Col>
            <Col lg={6} xs={12}>
              <StyledCouchSay>
                <CouchSay />
              </StyledCouchSay>
            </Col>
          </Row>
        </Container>
      </StyledCouchBody>
    </section>
  )
}
export default React.memo(SectionCouching)
