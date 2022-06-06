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
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 100vh;
`
const StyleFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`
interface PagesProps {
  navlinkItems: string
}
function Pages({ navlinkItems }: PagesProps) {
  return (
    <StyledPages>
      <StyleFlex>
        <Header navlinkItems={navlinkItems} />
        <StyledColOutlet>
          <Outlet />
        </StyledColOutlet>
      </StyleFlex>
      <Footer />
    </StyledPages>
  )
}

export default Pages
