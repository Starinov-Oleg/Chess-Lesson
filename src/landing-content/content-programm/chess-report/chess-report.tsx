import React from 'react'
import { Col,Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import reportPic from '../../../assets/section-programm/phone.png'
import LanguagesContext from '../../../common/languages/language-context'
import H1 from '../../../ui-library/h1/h1'
import H3 from '../../../ui-library/h3/h3'

const StyledImg = styled.img`
  width: 100%;
`
const StyledReportBlock = styled.div`
  font-size: var(--global-var-font-size-1rem);
  font-family: var(--global-var-font-mocha);
  text-align: left;
`
const StyledBlockBody = styled.div`
  margin-top: var(--global-var-font-size-1rem);
`
function ChessReport() {
  const language = React.useContext(LanguagesContext)
  return (
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <StyledImg src={reportPic} alt='here card report' />
        </Col>
        <Col lg={6} xs={12}>
          <StyledReportBlock>
            <H1 message={language.chessreport_title.message} colorOrange />
            <StyledBlockBody>
              <p>{language.chessreport_body_1.message}</p>
              <p>{language.chessreport_body_2.message}</p>
            </StyledBlockBody>
            <H3 message={language.chessreport_promo_1.message} primary />
            <H3 message={language.chessreport_promo_2.message} primary />
            <H3 message={language.chessreport_promo_3.message} primary />
          </StyledReportBlock>
        </Col>
      </Row>
    </Container>
  )
}

export default ChessReport
/**TODO H3 like list  - map and fix in language context*/
