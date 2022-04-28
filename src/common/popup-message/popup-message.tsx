import React from 'react'
import styled from 'styled-components'

interface PopupProps {
  handleClose: any
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
const StyledClosedIcon = styled.span`
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
`
function Popup({ handleClose, content }: PopupProps) {
  return (
    <StyledPopupBox>
      <StyledBox>
        <StyledClosedIcon className='close-icon' onClick={handleClose}>
          x
        </StyledClosedIcon>
        {content}
      </StyledBox>
    </StyledPopupBox>
  )
}

export default Popup
/**Make type normal form not any */
