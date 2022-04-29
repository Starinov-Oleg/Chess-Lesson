import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../main/footer/Footer'
import Header from './main-pages/Header'
import { Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'

const StyledPages = styled.div`
  background-color: #a4c8e7;
  a {
    text-decoration: none;
  }
`
const StyledColOutlet = styled(Col)`
  background-color: white;
`
interface PagesProps {
  navlinkItems: string
}
function Pages({ navlinkItems }: PagesProps) {
  return (
    <StyledPages>
      <Container fluid>
        <Row>
          <Col lg={2} md={3} sm={3}>
            <Header navlinkItems={navlinkItems} />
          </Col>
          <StyledColOutlet lg={10} md={9} sm={9} xs={12}>
            <Outlet />
          </StyledColOutlet>
        </Row>
      </Container>
      <Footer />
    </StyledPages>
  )
}

export default Pages
