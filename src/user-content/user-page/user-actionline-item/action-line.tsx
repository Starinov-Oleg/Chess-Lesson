import React from 'react'
import Button from '../../../ui-library/button-click/button'
import styled from 'styled-components'

interface ActionitemProps {
  header?: string
  body?: string
  footer?: string
  data?: any
}
const StyledButtonsDelete = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    padding: 0;
    margin-left: 1em;
    display: inline;
    position: absolute;
    right: 1em;
    top: 0em;
  }
`
const StyledLentaAction = styled.div`
  position: relative;
`
function ActionItem({ header, body, footer, data }: ActionitemProps) {
  return (
    <div>
      <div>{header}</div>
      <hr />
      <StyledLentaAction>
        {body}
        <StyledButtonsDelete>
          <Button message='-' />
        </StyledButtonsDelete>
      </StyledLentaAction>
      <span>{data}</span>
      <hr />
      <div>{footer}</div>
    </div>
  )
}

export default ActionItem
/**TODO here add chess action  mean -
 * lose and win in different chess fight; Possible clickbate event last 3 step in chess fight */
