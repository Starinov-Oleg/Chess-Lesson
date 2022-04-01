import programmexample from './programm-example.module.css'
import H1 from '../../../ui-library/h1/h1'
import ProgrammExampleItem from '../programm-example-item/programm-example-item'
import '../../../common/vars-css.css'

function ProgrammExample() {
  const style = { color: 'var(--global-var-color-black)', textAlign: 'var(--global-var-align-left)' }
  return (
    <div className={programmexample.programmexample}>
      <H1 message='PROGRAMM' style={style} />
      <span className={programmexample.typeprogramm}>junior</span>

      <ProgrammExampleItem messagetitle='Introduce Block' messagebody='Here body about ' />
    </div>
  )
}

export default ProgrammExample
