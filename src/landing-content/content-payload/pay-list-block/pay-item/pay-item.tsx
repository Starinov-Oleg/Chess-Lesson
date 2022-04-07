import React from 'react'
import payitem from './pay-item.module.css'
import H3 from '../../../../ui-library/h3/h3'
interface PayProps {
  header: string
  body: string
  note?: string | null
  footer: string
  style?: Object
}

function PayItem({ header, body, note, footer, style }: PayProps) {
  return (
    <div className={`${payitem.payitem} ${payitem.height}`} style={style}>
      <div className={payitem.headerblock}>
        <H3 message={header} colorBlack />
      </div>
      <div className={payitem.bodyblock}>
        <p className={payitem.body}>{body}</p>
      </div>

      <div className={payitem.noteblock}>{note ? <p className={payitem.note}>{note}</p> : null}</div>

      <div className={payitem.footerblock}>
        <H3 message={footer} colorBlack />
        <p className={payitem.note}>for lesson</p>
      </div>
    </div>
  )
}

export default PayItem
