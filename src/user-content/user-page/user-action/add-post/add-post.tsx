import React from 'react'
import styled from 'styled-components'
import Button from '../../../../ui-library/button-click/button'

const StyledTextArea = styled.div`
  textarea {
    width: 98%;
    margin: 1rem;
  }
`
const StyledAddPost = styled.div`
  button {
    width: 12rem;
  }
`
function AddPost() {
  return (
    <StyledAddPost>
      <StyledTextArea>
        <textarea rows={3}></textarea>
      </StyledTextArea>
      <Button message='ADD' />
      <Button message='CANCHEL' />
    </StyledAddPost>
  )
}

export default AddPost
