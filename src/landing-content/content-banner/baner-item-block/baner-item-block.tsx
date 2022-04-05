import BanerItemCard from '../baner-item-card/baner-item-card'
import baneritemblock from './baner-item-block.module.css'
import '../../../common/vars-css.css'

function BanerItemBlock() {
  const banerItemCard = [
    {
      headertext: 'Clips',
      bodytext: 'Clips from resources and original platform',
      href: 'chesslearn',
      src: '/assets/baner-icon/s1.png',
    },
    {
      headertext: 'Interactive Lesson',
      bodytext: 'Original Interective Lesson for club',
      href: 'chesslearn',
      src: '/assets/baner-icon/interactive.png',
    },
    {
      headertext: 'Lesson in Class',
      bodytext: 'Study in class with friends and couch',
      href: 'chesscoach',
      src: '/assets/baner-icon/class.png',
    },
  ]
  const card_position = { margin: '3%' }
  return (
    <div className={baneritemblock.baneritemblock}>
      {banerItemCard.map(item => (
        <BanerItemCard
          headertext={item.headertext}
          bodytext={item.bodytext}
          message='Know more>>>'
          href='chesslearn'
          style={card_position}
          src={item.src}
          alt={item.headertext}
        />
      ))}
    </div>
  )
}

export default BanerItemBlock

/**TODO add for static state */
