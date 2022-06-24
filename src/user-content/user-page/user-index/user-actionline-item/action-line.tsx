import React from 'react'
import styled from 'styled-components'

import Button from '../../../../ui-library/button-click/button'

interface ActionitemProps {
  header?: string
  body?: string
  footer?: string
  data?: any
  onClick?: any
  id?: any
}

const StyledLentaAction = styled.div`
  position: relative;
`
function ActionItem({ header, body, footer, data, onClick, id }: ActionitemProps) {
  const stylebutton = {
    width: '2rem',
    height: '2rem',
    padding: '0',
    marginLeft: '1em',
    display: 'inline',
    position: 'absolute',
    right: '1em',
    top: '0em',
  }

  return (
    <div>
      <div>
        {header}
        {id}
      </div>
      <hr />
      <StyledLentaAction>
        {body}
        <Button message='-' style={stylebutton} onClick={onClick} title='delete psot' />
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
