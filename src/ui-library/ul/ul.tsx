import React from 'react'
import styled from 'styled-components'

interface Props {
  style?: { [key: string]: string }
  lists: Array<string>
}
const StyledUlList = styled.ul`
  font-size: 2rem;
  text-align: left;
  color: white;
`
function Ul(props: Props) {
  const lists = props.lists

  const listItems = lists.map(list => <li key={list.toString()}>{list}</li>)
  return <StyledUlList style={props.style}>{listItems}</StyledUlList>
}

export default Ul
