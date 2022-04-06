import coucsay from './couch-say.module.css'
import '../../../common/vars-css.css'
import couchsay from '../../../assets/section-couch/couch-face.png'
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
      <div className={couchsay.imgcontainer}>
        <figure className={coucsay.imgblock}>
          <img src={couchsay} alt='funny couch face here' className={coucsay.img} />
          <figcaption className={coucsay.note}>Pham Dung </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default CouchSay
