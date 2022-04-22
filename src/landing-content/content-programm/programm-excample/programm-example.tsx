import React from 'react'
import programmexample from './programm-example.module.css'
import H1 from '../../../ui-library/h1/h1'
import ProgrammExampleItem from '../programm-example-item/programm-example-item'
import { TextAlignLeft } from '../../../common/styled-components/position.styled'
import LanguagesContext from '../../../common/languages/language-context'

function ProgrammExample() {
  const language = React.useContext(LanguagesContext)
  /**NOW USE CONTEXT
   *  const exampleItem = [
    {
      messagetitle: 'Introduce Block',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      img: '/assets/programm-icons/int.png',
    },
    {
      messagetitle: 'Block 1',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Piece]',
      img: '/assets/programm-icons/block1.png',
    },
    {
      messagetitle: 'Block 2',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Rules]',
      img: '/assets/programm-icons/block2.png',
    },
    {
      messagetitle: 'Block 3',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Debuts]',
      img: '/assets/programm-icons/block3.png',
    },
    {
      messagetitle: 'Block 4',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Junior Practice]',
      img: '/assets/programm-icons/block4.png',
    },
  ]
   */

  return (
    <div className={programmexample.programmexample}>
      <TextAlignLeft>
        <H1 message={language.programmexampletitleH1.message} colorBlack>
          <span className={programmexample.typeprogramm}>{language.programmexampletitleSpan.message}</span>
        </H1>
      </TextAlignLeft>
      {language.exampleItem.exampleItem.map((item, index) => (
        <ProgrammExampleItem
          messagetitle={item.messagetitle}
          messagebody={item.messagebody}
          messagenote={item.messagenote}
          key={index}
          src={item.img}
        />
      ))}
    </div>
  )
}

export default ProgrammExample
