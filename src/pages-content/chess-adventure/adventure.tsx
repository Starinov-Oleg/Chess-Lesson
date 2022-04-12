import adventure from './adventure.module.css'
import H1 from '../../ui-library/h1/h1'

function Adventure() {
  return (
    <section className='adventure'>
      <div className={`container ${adventure.adventure}`}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <H1 message='Adventure Chess Club' primary />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Adventure
