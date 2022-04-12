import React from 'react'
import programmexample from './programm-example.module.css'
import H1 from '../../../ui-library/h1/h1'
import ProgrammExampleItem from '../programm-example-item/programm-example-item'
import { TextAlignLeft } from '../../../common/styled-components/position.styled'
function ProgrammExample() {
  const exampleItem = [
    {
      messagetitle: 'Introduce Block',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
    },
    {
      messagetitle: 'Block 1',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Piece]',
    },
    {
      messagetitle: 'Block 2',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Rules]',
    },
    {
      messagetitle: 'Block 3',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Debuts]',
    },
    {
      messagetitle: 'Block 4',
      messagebody: 'Introduce with club and introduce with couch. Introduce with software. Introduce with card-report.',
      messagenote: '[Chess Junior Practice]',
    },
  ]
  const titleH1 = 'PROGRAMM'
  return (
    <div className={programmexample.programmexample}>
      <TextAlignLeft>
        <H1 message={titleH1} colorBlack>
          <span className={programmexample.typeprogramm}>junior</span>
        </H1>
      </TextAlignLeft>
      {exampleItem.map((item, index) => (
        <ProgrammExampleItem messagetitle={item.messagetitle} messagebody={item.messagebody} key={index} />
      ))}
    </div>
  )
}

export default ProgrammExample
/**TODO make item from states */
