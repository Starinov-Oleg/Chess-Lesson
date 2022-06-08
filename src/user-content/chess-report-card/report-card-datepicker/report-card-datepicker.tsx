import 'react-datepicker/dist/react-datepicker.css'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'

const StyledDatepicker = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledFlexItem = styled.div`
  padding: 0.5rem;
  DatePicker {
    background-color: var(--global-var-color-orange);
    border-radius: 5px;
    border-color: var(--global-var-color-orange);
    font-family: var(--global-var-font-mocha);
    color: var(--global-var-color-white);
  }
  DatePicker:hover,
  DatePicker:active,
  DatePicker:visited {
    background-color: #f2bd9f;
    border-color: var(--global-var-color-orange);
  }
`
function ReportDatepiker() {
  const [startDate, setStartDate] = useState<Date | null>(new Date('2014/02/08'))
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/02/10'))
  return (
    <StyledDatepicker>
      <StyledFlexItem>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </StyledFlexItem>
      <StyledFlexItem>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </StyledFlexItem>
    </StyledDatepicker>
  )
}

export default ReportDatepiker
