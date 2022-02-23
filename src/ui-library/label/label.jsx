import label from './label.module.css'

function Label({ message }) {
  return <label className={label.label}>{message}</label>
}

export default Label
