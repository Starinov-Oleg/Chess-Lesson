import React, { useEffect,useState } from 'react'

import { en, vn } from '../common/languages/language'
import LanguagesContext from '../common/languages/language-context'
import LanguageButton from '../common/languages/languages-buttons/language-button'
import Footer from '../main/footer/Footer'
import Header from '../main/header/Header'
import SectionSafe from './ content-safe/content-safe'
import SectionBaner from './content-banner/content-banner'
import SectionCouching from './content-couching/content-couching'
import SectionLearn from './content-learn/content-learn'
import SectionNews from './content-news/content-news'
import SectionPay from './content-payload/content-pay'
import SectionProgramm from './content-programm/content-programm'

/**interface LandingProps {
  contentSafe: string[]
  contentProgramm: string[]
  contentCouching: string[]
} */
function setLocalStorage(key: string, value: any) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {}
}

function getLocalStorage(key: string, initialValue: any) {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : initialValue
  } catch (e) {
    return initialValue
  }
}
function Landing(/*props: LandingProps*/) {
  const [language, setLanguage] = useState(() => getLocalStorage('language', en))
  useEffect(() => {
    setLocalStorage('language', language)
  }, [language])
  return (
    <>
      <Header />
      <LanguageButton onClick={() => setLanguage(en)} onClickVn={() => setLanguage(vn)} language={language.language} />
      <LanguagesContext.Provider value={getLocalStorage('language', en)}>
        <SectionLearn />
        <SectionBaner />
        <SectionSafe /*contentSafe={props.contentSafe} */ />
        <SectionProgramm /*contentProgramm={props.contentProgramm} */ />
        <SectionPay />
        <SectionCouching /*contentCouching={props.contentCouching} */ />
        <SectionNews />
      </LanguagesContext.Provider>
      <Footer />
    </>
  )
}

export default Landing
/**NOTE props for list. Now use context for change language */
