import React from 'react'
import styled from 'styled-components'

interface PopupProps {
  content: any
  content_title: string
  content_body: string
  id: any
}

const StyledPopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
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

function Popup({ content, content_title, content_body, id }: PopupProps) {
  return (
    <StyledPopupBox>
      <StyledBox>
        <b>
          {content_title}
          {id}
        </b>
        <p>{content_body}</p>
        {content}
      </StyledBox>
    </StyledPopupBox>
  )
}

export default Popup
/**Make type normal form not any */
