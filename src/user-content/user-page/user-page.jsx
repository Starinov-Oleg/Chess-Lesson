import page from './user-page.module.css'

function UserPage() {
  return (
    <section>
      <div className={page.page}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div className={page.cover}>cover</div>
            <div className={page.avatar}>logo</div>
          </div>
          <div className='col-md-6 col-12'>
            <div className={page.people}>
              <div className={page.friends}>friends items</div>
              <div className={page.coaches}>coaches items</div>
            </div>
            <div className={page.profile}>
              <div className={page.chessstatistic}>
                <p>
                  Win: <span>10</span>
                </p>
                <p>
                  Lose: <span>10</span>
                </p>
              </div>
              <div className={page.settings}></div>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className={page.actionsline}>
              <div className={page.line_item}>
                <div className={page.line_header}>header here</div>
                <hr />
                <div className={page.line_body}>body here</div>
                <hr />
                <div className={page.line_footer}>
                  footer here <span>data action here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserPage
