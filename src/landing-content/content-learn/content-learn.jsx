import  learn from './content-learn.module.css';
import  logo from '../../assets/section-learn/logo.png';
import { NavLink } from 'react-router-dom';
function SectionLearn() {
 return(
    <section className='section-learn'>
      <div className={learn.learn}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className={learn.promo}>
                <img src={logo} alt="chess-land" className={learn.logo}/>
                <div className="titles">
                    <h1 className={learn.title}>Kids Learn and Play Chess</h1>
                </div>
                <div className="buttons ">
                    <NavLink to="login" className={`${learn.login} ${learn.button}`} >LOGIN</NavLink>
                    <NavLink to="register" className={`${learn.register} ${learn.button}`}>SIGN UP</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionLearn;