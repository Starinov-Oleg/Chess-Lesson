import chesslearn from './chess-learn.module.css'

function ChessLearn() {
  return (
    <section className='chessland'>
      <div className={chesslearn.chesslearn}>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <div className={chesslearn.video}>
                
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className={chesslearn.start}>
              <h3 className={chesslearn.subtitles}>An Introduce to Chess:</h3>
              <p className={chesslearn.about}>Explain why Chess so awesome.</p>
              here video link
              <h3 className={chesslearn.subtitles}>An Introduce to Chess Land:</h3>
              <p className={chesslearn.about}>What special in Chess Land.</p>
              here video link
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChessLearn
