import React from 'react'
import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Button from '../../../../ui-library/button-click/button'

interface AddPostProps {
  onClick?: any
  onChange?: any
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
function AddPost({ onClick, onChange, value, name }: AddPostProps) {
  const { handleSubmit } = useForm()
  return (
    <div>
      <form onSubmit={handleSubmit(onClick)}>
        <StyledTextArea>
          <textarea onChange={onChange} rows={3} value={value} name={name} required />
        </StyledTextArea>
        <StyledButtonContainer>
          <Button message='ADD' />
          <Button message='CANCHEL' />
        </StyledButtonContainer>
      </form>
    </div>
  )
}

export default AddPost
