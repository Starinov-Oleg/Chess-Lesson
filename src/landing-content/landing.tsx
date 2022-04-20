import React, { useContext, useState } from 'react'
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

interface LandingProps {
  contentSafe: string[]
  contentProgramm: string[]
  contentCouching: string[]
}

function Landing(props: LandingProps) {
  return (
    <div className='Landing'>
      <Header />
      <LanguageButton />
      <SectionLearn />
      <SectionBaner />
      <SectionSafe contentSafe={props.contentSafe} />
      <SectionProgramm contentProgramm={props.contentProgramm} />
      <SectionPay />
      <SectionCouching contentCouching={props.contentCouching} />
      <SectionNews />

      <Footer />
    </div>
  )
}

export default React.memo(Landing)
