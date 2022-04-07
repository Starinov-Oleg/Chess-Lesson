import React from 'react'
import h3 from './h3.module.css'

interface H3Props {
  style?: Object
  message: string
}
function H3({ style, message }: H3Props) {
  return (
    <h3 className={`${h3.title} ${h3.color}`} style={style}>
      {message}
    </h3>
  )
}

export default H3
