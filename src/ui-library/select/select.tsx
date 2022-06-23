import React from 'react'
import styled from 'styled-components'

interface Props {
  style?: { [key: string]: string }
  lists: Array<string>
  default_value?: string | number
  value?: any
  handleChange?: any
}
const StyledSelect = styled.select`
  font-size: 2rem;
  text-align: left;
  color: black;
`
function Select(props: Props) {
  const lists = props.lists
  if (!lists.length) return null

  return (
    <StyledSelect defaultValue='defaultvalue' value={props.value} onChange={props.handleChange}>
      <option value='defaultvalue' disabled hidden>
        {props.default_value}
      </option>
      {lists.map((list: any, index: number) => (
        <option key={index} value={list.key}>
          {list}
        </option>
      ))}
      ;
    </StyledSelect>
  )
}

export default Select
