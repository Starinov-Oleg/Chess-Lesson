import React from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  background: black;
  border: 1px solid transparent;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  padding: 0;
  text-align: center;
  width: 4rem;
  height: 4rem;
`
interface SquareProps {
  style: Object
  value?: string
  key: string
  toggle?: string
  onClick: () => void
}

function Square(props: SquareProps) {
  return (
    <Fragment>
      <td>
        <StyledSquare onClick={props.onClick} style={props.style} key={props.key}>
          {props.value}
        </StyledSquare>
      </td>
    </Fragment>
  )
}

export default Square
