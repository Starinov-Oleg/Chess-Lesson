import Logo from '../../../ui-library/logo/logo'
import cover from '../../../assets/pages/chess-play/cover.jpg'
import Upload from '../../../ui-library/upload-file/upload-file'
import React from 'react'
import styled from 'styled-components'

function onUploadCover(e: any, props: any) {
  if (e.target.files.length) {
    alert('upload')
    props.savePhoto(e.target.files.length)
  }
}
function onUploadPhoto(e: any, props: any) {
  if (e.target.files.length) {
    alert('upload')
    props.savePhoto(e.target.files.length)
  }
}

const StyledUserHeader = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);
  height: 250px;
  background-color: #fff;
`
const StyledHeaderCover = styled.div`
  height: 250px;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
`
const StyledHeaderLogo = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  top: 30%;
  left: 5%;
`
function UserHeader(props: any) {
  const logoButton = { position: 'absolute', top: '0rem', right: '0rem', padding: '5px' }
  const coverButton = { width: 'auto', padding: '0rem', position: 'absolute', right: '1rem', top: '1rem' }

  return (
    <StyledUserHeader>
      <StyledHeaderCover
        style={{
          backgroundImage: `url(${!props.cover || props.cover.length === 0 ? cover : props.cover})`,
          width: '100%',
        }}>
        <Upload message='add cover' style={coverButton} onChange={onUploadCover} />
      </StyledHeaderCover>
      <StyledHeaderLogo>
        <Logo src={props.photo} />
        <Upload message='+' style={logoButton} onChange={onUploadPhoto} />
      </StyledHeaderLogo>
    </StyledUserHeader>
  )
}
export default UserHeader
