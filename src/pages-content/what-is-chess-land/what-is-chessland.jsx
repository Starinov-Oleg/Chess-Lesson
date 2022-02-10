import whatis from './what-is-chessland.module.css'

function WhatIsChessland() {
  return (
    <section className='whatis'>
      <div className={whatis.whatis}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <h3 className={whatis.title}>What is Chess Land?</h3>
            <div className={whatis.body}>
              <p>Here idea about ChessLand</p>
              <ul>
                <li>1</li>
                <li>2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsChessland
