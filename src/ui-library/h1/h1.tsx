import h1 from './h1.module.css'
import { ReactChildren, ReactChild } from 'react'
import React from 'react'

interface H1Props {
  message: string
  style?: Object
  children?: ReactChild | ReactChildren
}
function H1({ message, style, children }: H1Props) {
  return (
    <h1 className={`${h1.title} ${h1.color}`} style={style}>
      {message} {children}
    </h1>
  )
}

export default H1
