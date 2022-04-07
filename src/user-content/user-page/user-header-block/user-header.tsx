import userheader from './user.module.css'
import Logo from '../../../ui-library/logo/logo'
import cover from '../../../assets/pages/chess-play/cover.jpg'
import Upload from '../../../ui-library/upload-file/upload-file'
import React from 'react'

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
function UserHeader(props: any) {
  const logoButton = { position: 'absolute', top: '0rem', right: '0rem', padding: '5px' }
  const coverButton = { width: 'auto', padding: '0rem', position: 'absolute', right: '1rem', top: '1rem' }

  return (
    <div className={userheader.profile_display}>
      <div
        className={userheader.profile_cover}
        style={{
          backgroundImage: `url(${props.cover !== 0 ? props.cover : cover})`,
          width: '100%',
        }}>
        <Upload message='add cover' style={coverButton} onChange={onUploadCover} />
      </div>
      <div className={userheader.logo_info}>
        <Logo src={props.photo} />
        <Upload message='+' style={logoButton} onChange={onUploadPhoto} />
      </div>
    </div>
  )
}
export default UserHeader
