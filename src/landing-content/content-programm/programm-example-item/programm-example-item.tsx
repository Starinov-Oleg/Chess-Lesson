import programmexampleitem from './programm-example-item.module.css'
import H3 from '../../../ui-library/h3/h3'
import '../../../common/vars-css.css'

interface ProgrammExampleItemProps {
  messagetitle: string
  messagebody: string
}
function ProgrammExampleItem({ messagetitle, messagebody }: ProgrammExampleItemProps) {
  const style = {
    color: 'var(--global-var-color-black)',
    textAlign: 'var(--global-var-align-left)',
    padding: 'none',
    fontSize: '1rem',
    paddingBottom: 'none',
    paddingRight: 'var(--global-var-font-size-1rem)',
  }
  return (
    <div className={programmexampleitem.programmexampleitem}>
      <img src='/' alt='title programm block' />
      <H3 message={messagetitle} style={style} />
      <p className={programmexampleitem.body}>{messagebody}</p>
    </div>
  )
}

export default ProgrammExampleItem
