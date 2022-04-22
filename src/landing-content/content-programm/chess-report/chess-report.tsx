import React from 'react'
import chessreport from './chess-report.module.css'
import H1 from '../../../ui-library/h1/h1'
import reportPic from '../../../assets/section-programm/phone.png'
import H3 from '../../../ui-library/h3/h3'
import LanguagesContext from '../../../common/languages/language-context'

function ChessReport() {
  const language = React.useContext(LanguagesContext)
  return (
    <div className={chessreport.chessreport}>
      <div className='row'>
        <div className='col-lg-6 col-12'>
          <div className={chessreport.img}>
            <img src={reportPic} alt='here card report' className={chessreport.img} />
          </div>
        </div>
        <div className='col-lg-6 col-12'>
          <div className={chessreport.reportblock}>
            <H1 message={language.chessreport_title.message} colorOrange />
            <div className={chessreport.blockbody}>
              <p className={chessreport.body}>{language.chessreport_body_1.message}</p>
              <p className={chessreport.body}>{language.chessreport_body_2.message}</p>
            </div>
            <div className={chessreport.promo}>
              <H3 message={language.chessreport_promo_1.message} primary />
              <H3 message={language.chessreport_promo_2.message} primary />
              <H3 message={language.chessreport_promo_3.message} primary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChessReport
/**TODO H3 like list  - map and fix in language context*/
