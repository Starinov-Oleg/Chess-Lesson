import React from 'react'
import label from './label.module.css'

interface LabelProps {
  message: string
  htmlFor: any
  style?: Object
}
function Label({ message, htmlFor, style }: LabelProps) {
  return (
    <label className={label.label} htmlFor={htmlFor} style={style}>
      {message}
    </label>
  )
}

export default Label
