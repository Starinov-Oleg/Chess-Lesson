import React from 'react'
import upload from './upload-file.module.css'

interface UploadProps {
  message: string
  style?: object
  onChange: any
}

function Upload({ message, style, onChange }: UploadProps) {
  return (
    <span className={`btn  ${upload.btnFile}`} style={style}>
      {message}
      <input type='file' onChange={onChange} />
    </span>
  )
}
export default Upload
