import H3 from '../../ui-library/h3/h3'
import chessreportcard from './chess-report-card.module.css'
import React from 'react'

import ReportDatepiker from './report-card-datepicker/report-card-datepicker'
import ReportCardFilter from './report-card-filter/report-card-filter'
import Button from '../../ui-library/button-click/button'
import ReportCardPassport from './report-card-passport/report-card-passport'
function ChessReportCard() {
  const datepicker = 'Period. Max: 31 days'
  const filtersection = 'Select the activities you like to see. You can chose all together.'
  return (
    <div className={chessreportcard.chessreportcard}>
      <H3 message='CHESS REPORT CARD' colorNote />
      <div className={chessreportcard.passport}>
        <ReportCardPassport />
      </div>
      <div className={chessreportcard.datepikersection}>
        <ReportDatepiker />
        <p className={chessreportcard.datepickertitle}>{datepicker}</p>
      </div>
      <div className={chessreportcard.filtersection}>
        <p className={chessreportcard.filtertitle}>{filtersection}</p>
        <ReportCardFilter />
      </div>
      <div className={chessreportcard.buttons}>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <Button message='Submit' />
        </div>
      </div>
    </div>
  )
}

export default ChessReportCard
