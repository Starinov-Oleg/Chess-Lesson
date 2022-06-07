import styled from 'styled-components'

import H3 from '../../../ui-library/h3/h3'

interface ItemProps {
  title: string
  text: string
  data: string
}

const StyledItemId = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
`
const StyledText = styled.p`
  text-align: left;
`
const StyledData = styled.p`
  text-align: right;
`

function Item(props: ItemProps) {
  return (
    <StyledItemId>
      <H3 message={props.title} colorBlack />
      <hr />
      <StyledText>{props.text}</StyledText>
      <StyledData>{props.data}</StyledData>
    </StyledItemId>
  )
}

export default Item

/**Work with API */
