import BanerItemCard from '../baner-item-card/baner-item-card'
import baneritemblock from './baner-item-block.module.css'
import '../../../common/vars-css.css'

function BanerItemBlock() {
  const bodytextclips = 'Here text about clips'
  const bodytextlesson = 'Here text about video'
  return (
    <div className={baneritemblock.baneritemblock}>
      <BanerItemCard headertext='Clips' bodytext={bodytextclips} message='Know more>>>' href='chesslearn' />
      <BanerItemCard
        headertext='Interactive Lesson'
        bodytext={bodytextlesson}
        message='Know more>>>'
        href='chesslearn'
      />
      <BanerItemCard headertext='Lesson in Class' bodytext={bodytextlesson} message='Know more>>>' href='chesscoach' />
    </div>
  )
}

export default BanerItemBlock
