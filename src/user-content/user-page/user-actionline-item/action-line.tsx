import actionline from './action-line.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const baseURL = ' '
interface ActionitemProps {
  header?: string
  body?: string
  footer?: string
  data?: any
}
function ActionItem({ header, body, footer, data }: ActionitemProps) {
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setPost(response.data)
    })
  }, [])
  if (!post) return null
  return (
    <div className={actionline.line_item}>
      <div className={actionline.line_header}>{header}</div>
      <hr />
      <div className={actionline.line_body}>
        {body}
        <p>{post.fact}</p>
      </div>
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
