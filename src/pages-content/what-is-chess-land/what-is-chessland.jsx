import whatis from './what-is-chessland.module.css'
import H3 from '../../ui-library/h3/h3'
function WhatIsChessland() {
  return (
    <section className='whatis'>
      <div className={whatis.whatis}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <H3 message='What is Chess Land?' />
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
