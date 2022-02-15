import input from './input.module.css'

function Input({ name, register, rules, type }) {
  return (
    <input
      /*  type={props.type} className={input.input}  aria-describedby={props.aria_describedby} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}*/
      {...register(name, rules)}
      className={input.input}
      type={type}
    />
  )
}

export default Input
