import BanerItemCard from '../baner-item-card/baner-item-card'
import baneritemblock from './baner-item-block.module.css'
import '../../../common/vars-css.css'

function BanerItemBlock() {
  const banerItemCard = [
    { headertext: 'Clips', bodytext: 'Here text about clips', href: 'chesslearn' },
    { headertext: 'Interactive Lesson', bodytext: 'Here about interactive lessons', href: 'chesslearn' },
    { headertext: 'Lesson in Class', bodytext: 'here about class lessons', href: 'chesscoach' },
  ]
  return (
    <div className={baneritemblock.baneritemblock}>
      {banerItemCard.map(item => (
        <BanerItemCard headertext={item.headertext} bodytext={item.bodytext} message='Know more>>>' href='chesslearn' />
      ))}
    </div>
  )
}

export default BanerItemBlock
