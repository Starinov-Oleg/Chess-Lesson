import React from 'react'
import pay from './content-pay.module.css'
import H1 from '../../ui-library/h1/h1'
import PayListBlock from './pay-list-block/pay-list-block'
import PayBlock from './pay-block-year/pay-block-year'
function SectionPay() {
  return (
    <section className={pay.pay}>
      <div className={pay.pay}>
        <H1 message='HOW MUCH DO LESSON COST?' colorBlack />
        <PayListBlock />
        <PayBlock />
      </div>
    </section>
  )
}

export default SectionPay
