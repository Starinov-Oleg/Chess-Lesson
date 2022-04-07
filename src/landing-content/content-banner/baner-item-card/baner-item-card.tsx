import React from 'react'
import baneritemcard from './baner-item-card.module.css'
import LinkText from '../../../ui-library/link-text/link-text'
interface BanerCardItemProps {
  headertext: string
  bodytext: string
  message: string
  href: string
  style?: Object
  src: any
  alt: string
}
function BanerItemCard({ headertext, bodytext, message, href, style, src, alt }: BanerCardItemProps) {
  return (
    <div className={baneritemcard.position} style={style}>
      <div className={baneritemcard.baneritemcard}>
        <div className={baneritemcard.imgposition}>
          <img src={src} alt={alt} className={baneritemcard.img} />
        </div>
        <div className={baneritemcard.banercardheader}>{headertext}</div>
        <div className={baneritemcard.banercardbody}>{bodytext}</div>
        <div className={baneritemcard.notification}>
          <LinkText message={message} href={href} />
        </div>
      </div>
    </div>
  )
}

export default BanerItemCard
