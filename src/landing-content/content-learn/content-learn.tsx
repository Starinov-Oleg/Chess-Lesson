import React from 'react'
import logo from '../../assets/section-learn/logo.png'
import H1 from '../../ui-library/h1/h1'
import Button from '../../ui-library/button-register/button-register'
import ButtonLogin from '../../ui-library/button-login/button-login'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import imgchess from '../../assets/section-learn/cess.png'
import imgland from '../../assets/section-learn/land3.jpg'
function SectionLearn() {
  const StyledSectionLearn = styled.div`
    background-image: url(${imgchess}), url(${imgland});
    background-position: center;
    background-size: contain, cover;
    background-repeat: no-repeat;
    padding-bottom: 20%;
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
  return (
    <section className='section-learn'>
      <StyledSectionLearn>
        <Container>
          <Row>
            <Col lg={12} xs={12}>
              <StyledPromo>
                <StyledLogo src={logo} alt='chess-land' />
                <Titles>
                  <H1 message='Kids Learn and Play Chess' goldTitle />
                </Titles>
                <div className='buttons '>
                  <ButtonLogin message='LOGIN' />
                  <Button message='SIGN UP' />
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
