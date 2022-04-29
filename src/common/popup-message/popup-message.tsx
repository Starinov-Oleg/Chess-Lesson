import React from 'react'
import styled from 'styled-components'
import Button from '../../ui-library/button-click/button'

interface PopupProps {
  content: any
}

const StyledPopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`
const StyledBox = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
`

function Popup({ content }: PopupProps) {
  return (
    <StyledPopupBox>
      <StyledBox>
        <b>Delete post</b>
        <p>Post will deleted. This action is irreversible.</p>
        {content}
      </StyledBox>
    </StyledPopupBox>
  )
}

export default Popup
/**Make type normal form not any */
