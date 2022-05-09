import H3 from '../../ui-library/h3/h3'
import React from 'react'
import styled from 'styled-components'
import ReportDatepiker from './report-card-datepicker/report-card-datepicker'
import ReportCardFilter from './report-card-filter/report-card-filter'
import Button from '../../ui-library/button-click/button'
import ReportCardPassport from './report-card-passport/report-card-passport'

const StyledChessReportCard = styled.div`
  text-align: left;
  margin-top: var(--global-var-font-size-1rem);
  border-radius: 10px;
  box-shadow: 0 0 2rem var(--global-var-color-note);
  padding: 2rem;
`
const StyledTitle = styled.p`
  color: #cecfcf;
  font-size: 1rem;
  font-family: var(--global-var-font-mocha);
  padding-top: 0.5rem;
`
const StyledDatepikerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function ChessReportCard() {
  const datepicker = 'Period. Max: 31 days'
  const filtersection = 'Select the activities you like to see. You can chose all together.'
  return (
    <StyledChessReportCard>
      <H3 message='CHESS REPORT CARD' colorNote />
      <div>
        <ReportCardPassport />
      </div>
      <StyledDatepikerSection>
        <ReportDatepiker />
        <StyledTitle>{datepicker}</StyledTitle>
      </StyledDatepikerSection>
      <div>
        <StyledTitle>{filtersection}</StyledTitle>
        <ReportCardFilter />
      </div>
      <div className='btn-group' role='group' aria-label='Basic example'>
        <Button message='Submit' />
      </div>
    </StyledChessReportCard>
  )
}

export default ChessReportCard
