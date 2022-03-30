import PayItem from './pay-item/pay-item'
function PayListBlock() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-sm-12 col-12'>
          <PayItem header='4 lesson' body='Basic principles of the game' footer='100 000 Đ' />
        </div>
        <div className='col-md-4 col-sm-12  col-12'>
          <PayItem
            header='6 lesson'
            body='Explore the properties of shapes'
            footer='100 000 Đ'
            note='1 free lesson with full payment'
          />
        </div>
        <div className='col-md-4 col-sm-12 col-12'>
          <PayItem
            header='8 lesson'
            body='Study debuts and mistakes'
            footer='100 000 Đ'
            note='2 free lessons with full payment'
          />
        </div>
      </div>
    </div>
  )
}

export default PayListBlock
