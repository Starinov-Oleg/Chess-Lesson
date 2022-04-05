import PayItem from './pay-item/pay-item'
function PayListBlock() {
  const payloadlist = [
    { header: '4 lesson', body: 'Basic principles of the game', footer: '100 000 Đ' },
    {
      header: '6 lesson',
      body: 'Explore the properties of shapes',
      footer: '100 000 Đ',
      note: ' free lesson with full payment',
    },
    {
      header: '8 lesson',
      body: 'Study debuts and mistakes',
      footer: '100 000 Đ',
      note: '2 free lessons with full payment',
    },
  ]
  return (
    <div className='container'>
      <div className='row'>
        {payloadlist.map(item => (
          <div className='col-md-4 col-sm-12 col-12'>
            <PayItem header={item.header} body={item.body} note={item.note} footer={item.footer} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PayListBlock

/**TODO state */
