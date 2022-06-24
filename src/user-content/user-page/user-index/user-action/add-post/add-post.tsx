import React from 'react'
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Button from '../../../../../ui-library/button-click/button'

interface AddPostProps {
  onClick?: any
  onChange?: any
  onReset?: any
  value?: any
  name?: string
}
const StyledTextArea = styled(Container)`
  textarea {
    width: 98%;
    margin: 1rem;
  }
`
const StyledButtonContainer = styled(Container)`
  button {
    margin: 0.5rem;
  }
`
function AddPost({ onClick, onChange, value, name, onReset }: AddPostProps) {
  const { handleSubmit } = useForm()
  return (
    <div>
      <form onSubmit={handleSubmit(onClick)}>
        <StyledTextArea>
          <textarea onChange={onChange} rows={3} value={value} name={name} required />
        </StyledTextArea>
        <StyledButtonContainer>
          <Button message='ADD' />
          <Button message='CANCHEL' onClick={onReset} />
        </StyledButtonContainer>
      </form>
    </div>
  )
}

export default AddPost
