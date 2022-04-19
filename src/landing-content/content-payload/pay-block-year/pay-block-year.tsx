import React from 'react'

import H1 from '../../../ui-library/h1/h1'
import H3 from '../../../ui-library/h3/h3'
import picture from '../../../assets/section-payload/g.png'
import { Link } from 'react-router-dom'
import { FontSize1rem } from '../../../common/styled-components/font-size.styled'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

function PayBlock() {
  const StyledSectionPayblock = styled.div`
    background-color: white;
    border-radius: 10px;
  `
  const StyledPayblockBody = styled.div`
    text-align: left;
    padding-left: 1rem;
  `
  const StylePayblockPicture = styled.img`
    animation: MoveUpDown 10s linear infinite;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
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
  return (
    <Container>
      <StyledSectionPayblock>
        <Row>
          <Col md={8} xs={12}>
            <StyledPayblockBody>
              <Link to='/contact'>
                <H1 message='COURSE ON ONE YEAR ->' colorOrange />
              </Link>
              <H3
                message='Study 1-4 times a week in one or more subjects and complete the whole class program'
                colorBlack
                textAlignLeft
              />
              <FontSize1rem>
                <H3 message='3 lesson for free' colorNote textAlignLeft />
                <H3 message='50 000 Đ ' colorBlack textAlignLeft />
                <H3 message='for lesson' colorNote textAlignLeft />
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
