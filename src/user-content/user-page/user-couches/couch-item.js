import couch from './couch-item.module.css'
import CouchContainer from '../../../common/couch-block/couch-container'
function Couch() {
  return (
    <div className={couch.couch}>
      <div className={couch.friend}>
        <div className={couch.photo}>
          <CouchContainer />
        </div>
      </div>
    </div>
  )
}

export default Couch
