import label from './label.module.css'

interface LabelProps {
  message: string
  htmlFor: any
}
function Label({ message, htmlFor }: LabelProps) {
  return (
    <label className={label.label} htmlFor={htmlFor}>
      {message}
    </label>
  )
}

export default Label
