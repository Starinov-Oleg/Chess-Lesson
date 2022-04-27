import React from 'react'

interface ActionitemProps {
  header?: string
  body?: string
  footer?: string
  data?: any
}

function ActionItem({ header, body, footer, data }: ActionitemProps) {
  return (
    <div>
      <div>{header}</div>
      <hr />
      <div>{body}</div>
      <hr />
      <div>
        {footer}
        <span>{data}</span>
      </div>
    </div>
  )
}

export default ActionItem
/**TODO here add chess action  mean -
 * lose and win in different chess fight; Possible clickbate event last 3 step in chess fight */
