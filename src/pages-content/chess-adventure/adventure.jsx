import adventure from './adventure.module.css'
import H3 from '../../ui-library/h3/h3'
function Adventure() {
  return (
    <section className='adventure'>
      <div className={`container ${adventure.adventure}`}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <H3 message='Adventure Chess Club' />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Adventure
