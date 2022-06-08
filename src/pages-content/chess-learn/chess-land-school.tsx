import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import LinkText from '../../ui-library/link-text/link-text'
import About from './chess-learn-about-video/learn-about-video'
import Cover from './chess-learn-cover-video/learn-cover-video'
import Iframe from './chess-learn-video/iframe'

interface ChessLearnProps {
  learn: any
}

const StyledChessLearnContainer = styled(Container)`
  min-height: 100vh;
`

const StyledCol = styled(Col)`
  background-color: aliceblue;
`
const StyledStart = styled.div`
  text-align: left;
  margin: 1rem 0rem 1rem;
  border-radius: 10px;
`
const StyledLinkBlock = styled.div`
  text-align: right;
  padding: 1rem;
`
function ChessLearn(props: ChessLearnProps) {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [showpic, setShowPic] = useState(true)

  return (
    <section className='chessland'>
      <StyledChessLearnContainer fluid>
        <Row>
          <Col md={8} xs={12}>
            <div>
              {showpic ? <Cover /> : null}
              {show ? <Iframe src={props.learn.video1} height='500' width='100%' title='couch video' /> : null}

              {show2 ? <Iframe src={props.learn.video2} height='500' width='100%' title='couch video' /> : null}
            </div>
            <StyledLinkBlock>
              <LinkText message='More Lesson' href='/chesslesson' />
            </StyledLinkBlock>
          </Col>
          <StyledCol md={4} xs={12}>
            <StyledStart>
              <About
                message='An Introduce to Chess:'
                textMessage='Explain why Chess so awesome.'
                onClick={() => {
                  props.learn.toggle(setShow, setShowPic, setShow2)
                }}
              />
              <About
                message='An Introduce to Chess Land:'
                textMessage='What special in Chess Land.'
                onClick={() => {
                  props.learn.toggle2(setShow, setShowPic, setShow2)
                }}
              />
            </StyledStart>
          </StyledCol>
        </Row>
      </StyledChessLearnContainer>
    </section>
  )
}

export default ChessLearn

/**TODO: make type for state react and in this file  */
