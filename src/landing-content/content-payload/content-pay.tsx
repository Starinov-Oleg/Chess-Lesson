import React from 'react'
import H1 from '../../ui-library/h1/h1'
import PayListBlock from './pay-list-block/pay-list-block'
import PayBlock from './pay-block-year/pay-block-year'
import styled from 'styled-components'
import imgback from '../../assets/pages/sky.jpg'
import LanguagesContext from '../../common/languages/language-context'
const StyledSectionPay = styled.div`
  background-image: url(${imgback});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 10px;
`
function SectionPay() {
  const language = React.useContext(LanguagesContext)

  return (
    <section>
      <StyledSectionPay>
        <H1 message={language.paysection_title.message} colorBlack />
        <PayListBlock />
        <PayBlock />
      </StyledSectionPay>
    </section>
  )
}

export default SectionPay
