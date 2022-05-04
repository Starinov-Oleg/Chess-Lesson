import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Button from '../../../../ui-library/button-click/button'

interface AddPostProps {
  onClick?: () => void
}
const StyledTextArea = styled(Container)`
  textarea {
    width: 98%;
    margin: 1rem;
  }
`

function AddPost({ onClick }: AddPostProps) {
  return (
    <div>
      <StyledTextArea>
        <textarea rows={3}></textarea>
      </StyledTextArea>
      <Button message='ADD' onClick={onClick} />
      <Button message='CANCHEL' />
    </div>
  )
}

export default AddPost
