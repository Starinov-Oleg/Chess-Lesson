import learn from './content-learn.module.css'
import logo from '../../assets/section-learn/logo.png'
import H1 from '../../ui-library/h1/h1'
import Button from '../../ui-library/button-register/button-register'
import ButtonLogin from '../../ui-library/button-login/button-login'
function SectionLearn() {
  const style = { color: 'gold', fontSize: '3rem', textShadow: '2px 2px black', fontWeight: 'bold' }
  return (
    <section className='section-learn'>
      <div className={learn.learn}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-12'>
              <div className={learn.promo}>
                <img src={logo} alt='chess-land' className={learn.logo} />
                <div className='titles'>
                  <H1 message='Kids Learn and Play Chess' style={style} />
                </div>
                <div className='buttons '>
                  <ButtonLogin message='LOGIN' />
                  <Button message='SIGN UP' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionLearn
