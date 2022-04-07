import React from 'react'
import chessreport from './chess-report.module.css'
import '../../../common/vars-css.css'
import H1 from '../../../ui-library/h1/h1'
import reportPic from '../../../assets/section-programm/phone.png'
import H3 from '../../../ui-library/h3/h3'
function ChessReport() {
  const style = { color: 'var(--global-var-color-orange)' }
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
            <H1 message='Speacial Chess Report Card' style={style} />
            <div className={chessreport.blockbody}>
              <p className={chessreport.body}>Chess report card include all shedule time kids in club</p>
              <p className={chessreport.body}>
                With card report parents can control process success in club and correct shedule and programm.
              </p>
            </div>
            <div className={chessreport.promo}>
              <H3
                message='[Chess Report Card] can get from couch or click [club-member] and after click [get report]'
                colorBlack
              />
              <H3
                message='[Chess Report Card] show yu a detailed list of your Kinds club progress: Lesson, Videos, Workouts and etc'
                colorBlack
              />
              <H3
                message='For get Report for period can chose date period. If date period not chose -will show last month report'
                colorBlack
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChessReport
