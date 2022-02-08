import register from './register.module.css';
import home from '../../assets/pages/header-pages/home.png';
import { NavLink } from 'react-router-dom';
import Form from './form/form-register';

function Register(){

    return(
        <section className='register'>
            <div className={register.register}>
                <div className={`container ${register.color}`}>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <h1 className={`${register.title} ${register.color_text}`}>
                                <NavLink to='/'><img src={home} alt="chess-land" className={register.icon}/></NavLink>
                                    REGISTER
                            </h1>
                        </div>
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    )
}
export default Register