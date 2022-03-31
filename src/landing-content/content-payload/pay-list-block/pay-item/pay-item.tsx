import payitem from './pay-item.module.css'
import H3 from '../../../../ui-library/h3/h3'
interface PayProps {
  header: string
  body: string
  note?: string
  footer: string
  style?: Object
}

function PayItem({ header, body, note, footer, style }: PayProps) {
  const h3 = { color: 'black' }
  return (
    <div className={`${payitem.payitem} ${payitem.height}`} style={style}>
      <div className={payitem.headerblock}>
        <H3 message={header} style={h3} />
      </div>
      <div className={payitem.bodyblock}>
        <p className={payitem.body}>{body}</p>
      </div>
      <div className={payitem.noteblock}>
        <p className={payitem.note}>{note}</p>
      </div>
      <div className={payitem.footerblock}>
        <H3 message={footer} style={h3} />
        <p className={payitem.note}>for lesson</p>
      </div>
    </div>
  )
}

export default PayItem
