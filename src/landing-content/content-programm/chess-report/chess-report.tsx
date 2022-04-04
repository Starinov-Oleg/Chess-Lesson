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
          <div className={chessreport.reportblock}>
            <H1 message='Speacial Chess Report Card' style={style} />
            <div className={chessreport.blockbody}>
              <p className={chessreport.body}>Chess report card include all shedule time kids in club</p>
              <p className={chessreport.body}>
                With card report parents can control process success in club and correct shedule and programm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChessReport
