import input from './input.module.css';

function Input(props){
    return (
        <input 
            type={props.type} className={input.input}  aria-describedby={props.aria_describedby} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default Input;