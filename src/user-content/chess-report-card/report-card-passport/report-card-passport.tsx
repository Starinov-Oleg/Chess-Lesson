import React from 'react'
import Logo from '../../../ui-library/logo/logo'
import H3 from '../../../ui-library/h3/h3'
import { PaddingLeft } from '../../../common/styled-components/padding-margin.styled'
import styled from 'styled-components'

const StyledPassportProps = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function ReportCardPassport() {
  return (
    <StyledPassportProps>
      <Logo src='' />
      <div>
        <PaddingLeft>
          <H3 message={`Name:${'Dung'}`} primary />
          <H3 message={`Win:${'100'}`} primary />
          <H3 message={`Lose:${'500'}`} primary />
        </PaddingLeft>
      </div>
    </StyledPassportProps>
  )
}

export default ReportCardPassport
