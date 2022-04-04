import programmexample from './programm-example.module.css'
import H1 from '../../../ui-library/h1/h1'
import ProgrammExampleItem from '../programm-example-item/programm-example-item'
import '../../../common/vars-css.css'

function ProgrammExample() {
  const style = { color: 'var(--global-var-color-black)', textAlign: 'var(--global-var-align-left)' }
  const textblockintroduce =
    'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.'
  return (
    <div className={programmexample.programmexample}>
      <H1 message='PROGRAMM' style={style}>
        <span className={programmexample.typeprogramm}>junior</span>
      </H1>
      <ProgrammExampleItem messagetitle='Introduce Block' messagebody={textblockintroduce} />
      <ProgrammExampleItem messagetitle='Block 1.' messagebody={textblockintroduce} messagenote='[Chess Piece]' />
      <ProgrammExampleItem messagetitle='Block 2.' messagebody={textblockintroduce} messagenote='[Chess Rules]' />
      <ProgrammExampleItem messagetitle='Block 3.' messagebody={textblockintroduce} messagenote='[Chess Debuts]' />
      <ProgrammExampleItem
        messagetitle='Block 4.'
        messagebody={textblockintroduce}
        messagenote='[Chess Junior Practice]'
      />
    </div>
  )
}

export default ProgrammExample
/**TODO make item from states */
