import upload from './upload-file.module.css'

function Upload({ message, style, onChange }) {
  return (
    <span className={`btn  ${upload.btnFile}`} style={style}>
      {message}
      <input type='file' onChange={onChange} />
    </span>
  )
}
export default Upload
