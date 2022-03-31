import adventure from './adventure.module.css'
import H1 from '../../ui-library/h1/h1'
function Adventure() {
  const style_h1 = { color: '#2aa3d3' }
  return (
    <section className='adventure'>
      <div className={`container ${adventure.adventure}`}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <H1 message='Adventure Chess Club' style={style_h1} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Adventure
