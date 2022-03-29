import actionline from './action-line.module.css'

interface ActionitemProps {
  header?: string
  body?: string
  footer?: string
  data?: any
}
function ActionItem({ header, body, footer, data }: ActionitemProps) {
  return (
    <div className={actionline.line_item}>
      <div className={actionline.line_header}>{header}</div>
      <hr />
      <div className={actionline.line_body}>{body}</div>
      <hr />
      <div className={actionline.line_footer}>
        {footer}
        <span>{data}</span>
      </div>
    </div>
  )
}

export default ActionItem
/**TODO here add chess action  mean -
 * lose and win in different chess fight; Possible clickbate event last 3 step in chess fight */
