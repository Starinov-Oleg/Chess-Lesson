import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  message: string
  htmlFor: any
  style?: Object
}
const StyleLabel = styled.label`
  font-size: 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-family: 'Mochiy';
`
function Label({ message, htmlFor, style }: LabelProps) {
  return (
    <StyleLabel htmlFor={htmlFor} style={style}>
      {message}
    </StyleLabel>
  )
}

export default Label
