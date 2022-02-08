import form from './form-register.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '../../../ui-library/input/input';
import Label from '../../../ui-library/label/label';

function Form(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const history =useNavigate();
    function handleSubmit(e)  {
        e.preventDefault();
        alert(`${email}`)
       history('/')
    };
    return (
        <form className={form.form} onSubmit={e=>{handleSubmit(e)}}>
            <div className='row'>
                <div className="col-md-6">
                    <Label message='Email address'/>
                    <Input type='email' value={email} placeholder='Here e-mail type: email@email.com' aria_describedby='email Help' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <Label message='Password'/>
                    <Input type='password' value={password} placeholder='' aria_describedby='email Help' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
            <button className={form.button} >REGISTER</button>
        </form>
    )
}
export default Form;