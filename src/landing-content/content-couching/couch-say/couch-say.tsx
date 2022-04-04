import coucsay from './couch-say.module.css'
import '../../../common/vars-css.css'
function CouchSay() {
  return (
    <div className={coucsay.chessreport}>
      <div className={coucsay.body}>
        <p className={coucsay.bodytext}>
          “Before, I thought chess was for people smarter than me but now I feel smarter than before knowing how to play
          chess. I also have more patience now. Thank you again for going out of your way to come every Tuesday to teach
          us to play chess.”
        </p>
      </div>
      <div className={coucsay.img}>
        <figure className={coucsay.imgblock}>
          <img src='/dsdsd' alt='here card report' />
          <figcaption className={coucsay.note}>Pham Dung </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default CouchSay
