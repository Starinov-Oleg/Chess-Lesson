import React from 'react'
import school from '../../assets/section-programm/school.jpg'
import Button from '../../ui-library/button-link/button-link'
import Ul from '../../ui-library/ul/ul'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'
import ProgrammExample from './programm-excample/programm-example'
import ChessReport from './chess-report/chess-report'
import LanguagesContext from '../../common/languages/language-context'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
/**interface contentProgrammProps {
  contentProgramm: Array<string>
} */

const style = { color: 'var( --global-var-color-grey)' }
const style_h3 = { paddingTop: '2rem' }
const style_h1 = { color: 'var( --global-var-color-blue)' }

const StyledImg = styled.img`
  width: 70%;
  padding-bottom: 2rem;
`
function SectionProgramm(/*{ contentProgramm }: contentProgrammProps*/) {
  const language = React.useContext(LanguagesContext)
  return (
    <section className='school-programm'>
      <Container>
        <Row>
          <Col lg={12} xs={12}>
            <H3 message={language.titleprogrammH3.message} style={style_h3} primary />
            <H1 message={language.titleprogrammH1.message} style={style_h1} primary />
          </Col>
        </Row>
        <Row>
          <Col lg={6} xs={12}>
            <StyledImg
              src={school}
              alt="<a href='https://www.freepik.com/vectors/tree'>Tree vector created by jcomp - www.freepik.com</a>"
            />
          </Col>
          <Col lg={6} xs={12}>
            <Ul lists={language.contentProgramm.lists} style={style} />
            <Button message={language.buttonprogramm.message} href='chesslandschool' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgrammExample />
          </Col>
        </Row>
        <Row>
          <Col>
            <ChessReport />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default React.memo(SectionProgramm)
