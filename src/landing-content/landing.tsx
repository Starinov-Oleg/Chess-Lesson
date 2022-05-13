import React, { useState } from 'react'
import SectionLearn from './content-learn/content-learn'
import SectionBaner from './content-banner/content-banner'
import SectionProgramm from './content-programm/content-programm'
import SectionCouching from './content-couching/content-couching'
import SectionNews from './content-news/content-news'
import SectionSafe from './ content-safe/content-safe'
import SectionPay from './content-payload/content-pay'
import Header from '../main/header/Header'
import Footer from '../main/footer/Footer'
import LanguageButton from '../common/languages/languages-buttons/language-button'
import { en, vn } from '../common/languages/language'
import LanguagesContext from '../common/languages/language-context'
import styled from 'styled-components'
/**interface LandingProps {
  contentSafe: string[]
  contentProgramm: string[]
  contentCouching: string[]
} */

const StyledLanding = styled.div`
  /* background: rgb(102, 153, 153);
  background: linear-gradient(
    90deg,
    rgba(102, 153, 153, 0.27) 0%,
    rgba(153, 231, 175, 0.2763480392156863) 50%,
    rgba(102, 153, 153, 1) 100%
  );*/
`
function Landing(/*props: LandingProps*/) {
  const [language, setLanguage] = useState(en)

  return (
    <StyledLanding>
      <Header />
      <LanguageButton onClick={() => setLanguage(vn)} onClickVn={() => setLanguage(en)} />
      <LanguagesContext.Provider value={language}>
        <SectionLearn />
        <SectionBaner />
        <SectionSafe /*contentSafe={props.contentSafe} */ />
        <SectionProgramm /*contentProgramm={props.contentProgramm} */ />
        <SectionPay />
        <SectionCouching /*contentCouching={props.contentCouching} */ />
        <SectionNews />
      </LanguagesContext.Provider>
      <Footer />
    </StyledLanding>
  )
}

export default React.memo(Landing)
/**NOTE props for list. Now use context for change language */
