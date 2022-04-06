import datepicker from './report-datepicker.module.css'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function ReportDatepiker() {
  const [startDate, setStartDate] = useState<Date | null>(new Date('2014/02/08'))
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/02/10'))
  return (
    <div className={datepicker.datepicker}>
      <div className={datepicker.flexitem}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className={datepicker.customisedatepiker}
        />
      </div>
      <div className={datepicker.flexitem}>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className={datepicker.customisedatepiker}
        />
      </div>
    </div>
  )
}

export default ReportDatepiker
