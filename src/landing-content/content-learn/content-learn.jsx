import  learn from './content-learn.module.css'
import  logo from '../../assets/section-learn/logo.png'
function SectionLearn() {
 return(
    <section className='section-learn'>
      <div className={learn.learn}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className={learn.promo}>
                <img src={logo} alt="chess-land" className={learn.logo}/>
                <div className="titles">
                    <h1 className={learn.title}>Kids Learn and Play Chess</h1>
                </div>
                <div className="buttons ">
                    <a className={`${learn.login} ${learn.button}`} >LOGIN</a>
                    <a className={`${learn.register} ${learn.button}`}>SIGN UP</a>
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