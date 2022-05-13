import React from 'react'
import H1 from '../../ui-library/h1/h1'
import PayListBlock from './pay-list-block/pay-list-block'
import PayBlock from './pay-block-year/pay-block-year'
import styled from 'styled-components'
import LanguagesContext from '../../common/languages/language-context'
const StyledSectionPay = styled.div`
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
