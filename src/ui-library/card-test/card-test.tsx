import React, { Fragment } from 'react'
import styled from 'styled-components'
import H3 from '../h3/h3'
import Label from '../../ui-library/label/label'
interface CardTestProps {
  title: string
  description: string
  question: string
  chose_test: string
  lists: Array<any>
}

const StyledCardTest = styled.div``
const StyledQuestion = styled.div``
const StyledCheckbox = styled.div`
  label {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`
const StyledRadio = styled.div`
  label {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`
const StyledTestItem = styled.div``

function CardTest({ title, description, question, chose_test, lists }: CardTestProps) {
  const listItems_checkbox = lists.map(list => (
    <Fragment key={list.id}>
      <input type='checkbox' id={list.list_item_label} name={list.list_item_label} value={list.list_item_label} />
      <Label message={list.list_item_label} htmlFor={list.list_item_label} />
    </Fragment>
  ))
  const listItems_radio = lists.map(list => (
    <Fragment key={list.id}>
      <input type='radio' id={list.list_item_label} name={list.list_item_label} value={list.list_item_label} />
      <Label message={list.list_item_label} htmlFor={list.list_item_label} />
    </Fragment>
  ))
  return (
    <StyledCardTest className={`cardtest`}>
      <H3 message={title} />
      <p>{description}</p>
      <StyledTestItem>
        <StyledQuestion>{question}</StyledQuestion>
        {chose_test === 'checkbox' ? (
          <StyledCheckbox>
            <form>{listItems_checkbox}</form>
          </StyledCheckbox>
        ) : (
          <StyledRadio>
            <form>{listItems_radio}</form>
          </StyledRadio>
        )}
      </StyledTestItem>
    </StyledCardTest>
  )
}
export default CardTest
