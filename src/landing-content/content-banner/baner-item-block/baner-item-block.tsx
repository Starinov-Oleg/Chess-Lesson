import React from 'react'
import styled from 'styled-components'

import LanguagesContext from '../../../common/languages/language-context'
import BanerItemCard from '../baner-item-card/baner-item-card'

const StyledBanerItemBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 15rem;
  div {
    width: 20em;
    margin: 1%;
  }
  @media screen and (max-width: 1399px) {
    padding-bottom: 0;
  }
`

function BanerItemBlock() {
  const language = React.useContext(LanguagesContext)
  /**NOW USE CONTEXT for language
   *  const banerItemCard = [
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
   */

  return (
    <StyledBanerItemBlock>
      {language.banerItemCard.banerItemCard.map((item, index) => (
        <BanerItemCard
          headertext={item.headertext}
          bodytext={item.bodytext}
          message='Know more>>>'
          href='chesslearn'
          src={item.src}
          alt={item.headertext}
          key={index}
        />
      ))}
    </StyledBanerItemBlock>
  )
}

export default BanerItemBlock


