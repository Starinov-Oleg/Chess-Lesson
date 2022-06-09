import styled from 'styled-components'

import Label from '../../ui-library/label/label'
import H3 from '../h3/h3'
interface CardTestProps {
  title: string
  description: string
  question: string
  chose_test: string
  lists: Array<any>
  onChange: any
}
const StyledTestDescription = styled.p`
  font-size: 2rem;
`
const StyledCardTest = styled.div``
const StyledQuestion = styled.h3``
const StyledTestItem = styled.div``

const ListItemBlock = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`
const StyledTestImg = styled.img`
  display: block;
  width: 100%;
`
const StyledCheckbox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
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
      <input
        type='checkbox'
        id={list.list_item_label}
        name={list.list_item_label}
        value={list.list_item_label}
        onChange={props.onChange}
      />
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
      <input
        type='checkbox'
        id={list.list_item_label}
        name={list.list_item_label}
        value={list.list_item_label}
        onChange={props.onChange}
      />
      <Label message={list.list_item_label} htmlFor={list.list_item_label} />
    </ListItemBlock>
  ))
  return <>{listItems}</>
}
function CardTest({ title, description, question, chose_test, lists, onChange }: CardTestProps) {
  return (
    <StyledCardTest>
      <H3 message={title} />
      <StyledTestDescription>{description}</StyledTestDescription>
      <StyledTestItem>
        <StyledQuestion>{question}</StyledQuestion>
        <form>
          {chose_test === 'checkbox' ? (
            <StyledCheckbox>
              <ListItemsCheckbox lists={lists} onChange={onChange} />
            </StyledCheckbox>
          ) : (
            <StyledRadio>
              <ListItemsRadio lists={lists} />
            </StyledRadio>
          )}
        </form>
      </StyledTestItem>
    </StyledCardTest>
  )
}
export default CardTest
