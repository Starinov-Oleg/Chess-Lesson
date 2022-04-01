import chessreport from './chess-report.module.css'
import '../../../common/vars-css.css'
import H1 from '../../../ui-library/h1/h1'
function ChessReport() {
  const style = { color: 'var(--global-var-color-orange)' }
  return (
    <div className={chessreport.chessreport}>
      <div className='row'>
        <div className='col-lg-6 col-12'>
          <div className={chessreport.img}>
            <img src='/dsdsd' alt='here card report' />
          </div>
        </div>
        <div className='col-lg-6 col-12'>
          <div className={chessreport.body}>
            <H1 message='Speacial Chess Report Card' style={style} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChessReport
