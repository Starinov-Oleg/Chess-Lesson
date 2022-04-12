import React from 'react'
import passport from './report-card-passport.module.css'
import Logo from '../../../ui-library/logo/logo'
import H3 from '../../../ui-library/h3/h3'
import { PaddingLeft } from '../../../common/styled-components/padding-margin.styled'
function ReportCardPassport() {
  return (
    <div className={passport.passport}>
      <Logo src='' />
      <div className={passport.flexitem}>
        <PaddingLeft>
          <H3 message={`Name:${'Dung'}`} primary />
          <H3 message={`Win:${'100'}`} primary />
          <H3 message={`Lose:${'500'}`} primary />
        </PaddingLeft>
      </div>
    </div>
  )
}

export default ReportCardPassport
