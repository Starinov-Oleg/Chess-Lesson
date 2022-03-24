import label from './label.module.css'

function Label({ message, htmlFor }) {
  return (
    <label className={label.label} htmlFor={htmlFor}>
      {message}
    </label>
  )
}

export default Label
