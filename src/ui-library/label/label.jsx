import label from './label.module.css';

function Label(props){
    return (
        <label  className={label.label} >{props.message}</label>
    )
}

export default Label;