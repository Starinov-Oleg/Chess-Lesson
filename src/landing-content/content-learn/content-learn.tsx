import React from 'react'
import logo from '../../assets/section-learn/logo.png'
import H1 from '../../ui-library/h1/h1'
import Button from '../../ui-library/button-register/button-register'
import ButtonLogin from '../../ui-library/button-login/button-login'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import imgchess from '../../assets/section-learn/cess.png'
import imgland from '../../assets/section-learn/land3.jpg'
import LanguagesContext from '../../common/languages/language-context'
const StyledSectionLearn = styled.div`
  background-image: url(${imgchess}), url(${imgland});
  background-position: center;
  background-size: contain, cover;
  background-repeat: no-repeat;
  padding-bottom: 20%;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`
const StyledLogo = styled.img`
  width: 45%;
`
const StyledPromo = styled.div`
  margin-top: 10%;
`
const Titles = styled.div`
  h1 {
    font-size: 3rem;
    text-shadow: 2px 2px black;
    font-weight: bold;
  }
`
function SectionLearn() {
  const language = React.useContext(LanguagesContext)
  return (
    <section className='section-learn'>
      <StyledSectionLearn>
        <Container>
          <Row>
            <Col lg={12} xs={12}>
              <StyledPromo>
                <StyledLogo src={logo} alt='chess-land' />
                <Titles>
                  <H1 message={language.logo.message} goldTitle />
                </Titles>
                <div className='buttons '>
                  <ButtonLogin message={language.loginbutton.message} />
                  <Button message={language.signupbutton.message} />
                </div>
              </StyledPromo>
            </Col>
          </Row>
        </Container>
      </StyledSectionLearn>
    </section>
  )
}
export default React.memo(SectionLearn)
