import React from 'react'
import passport from './report-card-passport.module.css'
import Logo from '../../../ui-library/logo/logo'
import H3 from '../../../ui-library/h3/h3'
function ReportCardPassport() {
  const style_h3 = { paddingLeft: '2rem' }
  return (
    <div className={passport.passport}>
      <Logo src='' />
      <div className={passport.flexitem}>
        <H3 message={`Name:${'Dung'}`} style={style_h3} />
        <H3 message={`Win:${'100'}`} style={style_h3} />
        <H3 message={`Lose:${'500'}`} style={style_h3} />
      </div>
    </div>
  )
}

export default ReportCardPassport
