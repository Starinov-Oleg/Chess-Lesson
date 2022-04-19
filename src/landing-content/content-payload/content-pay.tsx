import React from 'react'

import H1 from '../../ui-library/h1/h1'
import PayListBlock from './pay-list-block/pay-list-block'
import PayBlock from './pay-block-year/pay-block-year'
import styled from 'styled-components'
import imgback from '../../assets/pages/sky.jpg'
function SectionPay() {
  const StyledSectionPay = styled.div`
    background-image: url(${imgback});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 10px;
  `
  return (
    <section>
      <StyledSectionPay>
        <H1 message='HOW MUCH DO LESSON COST?' colorBlack />
        <PayListBlock />
        <PayBlock />
      </StyledSectionPay>
    </section>
  )
}

export default SectionPay
