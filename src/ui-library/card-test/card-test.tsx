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
const StyledTestItem = styled.div``
const ListItemForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`
const ListItemBlock = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`
const StyledTestImg = styled.img`
  display: block;
  width: 100%;
`
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

const ListItemsCheckbox = (props: any) => {
  const lists = props.lists
  const listItems = lists.map((list: any) => (
    <ListItemBlock key={list.id}>
      {list.list_item_img ? <StyledTestImg src={list.list_item_img} alt='chose for test' /> : null}
      <input type='checkbox' id={list.list_item_label} name={list.list_item_label} value={list.list_item_label} />
      <Label message={list.list_item_label} htmlFor={list.list_item_label} />
    </ListItemBlock>
  ))
  return <>{listItems}</>
}
const ListItemsRadio = (props: any) => {
  const lists = props.lists
  const listItems = lists.map((list: any) => (
    <ListItemBlock key={list.id}>
      {list.list_item_img ? <StyledTestImg src={list.list_item_img} alt='chose for test' /> : null}
      <input type='checkbox' id={list.list_item_label} name={list.list_item_label} value={list.list_item_label} />
      <Label message={list.list_item_label} htmlFor={list.list_item_label} />
    </ListItemBlock>
  ))
  return <>{listItems}</>
}
function CardTest({ title, description, question, chose_test, lists }: CardTestProps) {
  return (
    <StyledCardTest className={`cardtest`}>
      <H3 message={title} />
      <p>{description}</p>
      <StyledTestItem>
        <StyledQuestion>{question}</StyledQuestion>
        {chose_test === 'checkbox' ? (
          <StyledCheckbox>
            <ListItemForm>
              <ListItemsCheckbox lists={lists} />
            </ListItemForm>
          </StyledCheckbox>
        ) : (
          <StyledRadio>
            <ListItemForm>
              <ListItemsRadio lists={lists} />
            </ListItemForm>
          </StyledRadio>
        )}
      </StyledTestItem>
    </StyledCardTest>
  )
}
export default CardTest
