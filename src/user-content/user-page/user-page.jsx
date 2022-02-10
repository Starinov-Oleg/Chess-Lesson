import page from './user-page.module.css'
import Logo from '../../ui-library/logo/logo'
import Statistic from '../../ui-library/statistic/statistic'
function UserPage() {
  return (
    <section>
      <div className={page.page}>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div className={page.profile_display}>
              <div className={page.profile_cover}></div>
              <div className={page.logo_info}>
                <Logo />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className={page.profile}>
              <div className={page.chessstatistic}>
                <Statistic />
              </div>
              <div className={page.settings}></div>
            </div>
            <div className={page.people}>
              <div className={page.friends}>friends items</div>
              <div className={page.coaches}>coaches items</div>
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
