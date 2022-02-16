import actionline from './action-line.module.css'

function ActionItem(props) {
  return (
    <div className={actionline.line_item}>
      <div className={actionline.line_header}>{props.header}</div>
      <hr />
      <div className={actionline.line_body}>{props.body}</div>
      <hr />
      <div className={actionline.line_footer}>
        {props.footer}
        <span>{props.data}</span>
      </div>
    </div>
  )
}

export default ActionItem
/**TODO here add chess action  mean -
 * lose and win in different chess fight; Possible clickbate event last 3 step in chess fight */
