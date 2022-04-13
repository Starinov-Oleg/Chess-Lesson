import React from 'react'
import styled from 'styled-components'

interface UploadProps {
  message: string
  style?: object
  onChange: any
}
const StyledUploadBlock = styled.span`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Mochiy';
  padding: 10px 50px;
  text-decoration: none;
  box-shadow: 0px 0px 0px 0px #c25e1b;
  background-color: #ff6b08;
  border: 1px solid #f2bd9f;
  text-shadow: 0px 1px 0px #662828;
  &:hover {
    background-color: #f2bd9f;
    color: white;
  }
  &:active {
    position: relative;
    top: 1px;
    color: white;
  }
`
const StyledUploadInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  cursor: pointer;
  display: block;
  @media (max-width: 982px) {
    .button {
      padding: 4% 16%;
      width: auto;
    }
  }
`
function Upload({ message, style, onChange }: UploadProps) {
  return (
    <StyledUploadBlock className={`btn`} style={style}>
      {message}
      <StyledUploadInput type='file' onChange={onChange} />
    </StyledUploadBlock>
  )
}
export default Upload
