import baneritemcard from './baner-item-card.module.css'
import LinkText from '../../../ui-library/link-text/link-text'
interface BanerCardItemProps {
  headertext: string
  bodytext: string
  message: string
  href: string
}
function BanerItemCard({ headertext, bodytext, message, href }: BanerCardItemProps) {
  return (
    <div className={baneritemcard.baneritemcard}>
      <div className={baneritemcard.banercardheader}>{headertext}</div>
      <div className={baneritemcard.banercardbody}>{bodytext}</div>
      <div className={baneritemcard.notification}>
        <LinkText message={message} href={href} />
      </div>
    </div>
  )
}

export default BanerItemCard
