import React from 'react'

import H1 from '../../../ui-library/h1/h1'
import H3 from '../../../ui-library/h3/h3'
import picture from '../../../assets/section-payload/g.png'
import { Link } from 'react-router-dom'
import { FontSize1rem } from '../../../common/styled-components/font-size.styled'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LanguagesContext from '../../../common/languages/language-context'

const StyledSectionPayblock = styled.div`
  background-color: white;
  box-shadow: 0 0 2rem var(--global-var-color-note);
  border-radius: 10px;
`
const StyledPayblockBody = styled.div`
  text-align: left;
  padding-left: 1rem;
`
const StyleLink = styled(Link)`
  text-decoration: none;
`
const StylePayblockPicture = styled.img`
  animation: MoveUpDown 10s linear infinite;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  a {
    text-decoration: none;
  }
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 2rem;
    }
  }
  @media screen and (max-width: 767px) {
    position: static;
  }
`
function PayBlock() {
  const language = React.useContext(LanguagesContext)
  return (
    <Container>
      <StyledSectionPayblock>
        <Row>
          <Col md={8} xs={12}>
            <StyledPayblockBody>
              <StyleLink to='/contact'>
                <H1 message={language.payblocktitileH1.message} colorOrange />
              </StyleLink>
              <H3 message={language.payblockH3_1.message} colorBlack textAlignLeft />
              <FontSize1rem>
                <H3 message={language.payblockH3_2.message} colorNote textAlignLeft />
                <H3 message={language.payblockH3_3.message} colorBlack textAlignLeft />
                <H3 message={language.payblockH3_4.message} colorNote textAlignLeft />
              </FontSize1rem>
            </StyledPayblockBody>
          </Col>
          <Col md={4} xs={12} className='sticky-top'>
            <StylePayblockPicture
              src={picture}
              alt='video here <a href=https://www.freepik.com/vectors/background>Background vector created by pch.vector - www.freepik.com</a>'
            />
          </Col>
        </Row>
      </StyledSectionPayblock>
    </Container>
  )
}

export default PayBlock
