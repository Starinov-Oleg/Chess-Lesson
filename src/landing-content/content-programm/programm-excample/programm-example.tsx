import React from 'react'
import H1 from '../../../ui-library/h1/h1'
import ProgrammExampleItem from '../programm-example-item/programm-example-item'
import LanguagesContext from '../../../common/languages/language-context'
import styled from 'styled-components'

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
  const StyledProgrammExample = styled.div`
    background-color: var(--global-var-color-white);
    border-radius: 10px;
    box-shadow: 0 0 2rem var(--global-var-color-note);
    padding: var(--global-var-font-size-1rem);
    text-align: left;
  `
  const StyledProgrammName = styled.span`
    color: palevioletred;
  `
  return (
    <StyledProgrammExample>
      <H1 message={language.programmexampletitleH1.message} colorBlack>
        <StyledProgrammName>{language.programmexampletitleSpan.message}</StyledProgrammName>
      </H1>
      {language.exampleItem.exampleItem.map((item, index) => (
        <ProgrammExampleItem
          messagetitle={item.messagetitle}
          messagebody={item.messagebody}
          messagenote={item.messagenote}
          key={index}
          src={item.img}
        />
      ))}
    </StyledProgrammExample>
  )
}

export default ProgrammExample
