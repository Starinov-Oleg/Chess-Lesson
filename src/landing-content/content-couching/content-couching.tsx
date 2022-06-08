import React from 'react'
import { Col,Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import img from '../../assets/section-couch/back.jpg'
import LanguagesContext from '../../common/languages/language-context'
import Button from '../../ui-library/button-link/button-link'
import H1 from '../../ui-library/h1/h1'
import Ul from '../../ui-library/ul/ul'
import CouchSay from './couch-say/couch-say'

/**
 *interface contentCouchingProps {
  contentCouching: Array<string>
} */
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
function SectionCouching() {
  const language = React.useContext(LanguagesContext)
  return (
    <section className='school-couching'>
      <StyledCouchBody>
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <StyledCouchIntro>
                <H1 message={language.couching_intro.message} colorWhite />
                <Ul lists={language.contentCouching.lists} />
                <Button message={language.counching_button.message} href='chesslandcoaches' />
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
