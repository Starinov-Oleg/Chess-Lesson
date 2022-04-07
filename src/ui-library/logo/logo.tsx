import React from 'react'
import logo from './logo.module.css'
import photo from '../../assets/pages/chess-play/user.png'

interface LogoProps {
  src: string
}

function Logo({ src }: LogoProps) {
  return (
    <div className={logo.photo_pacage}>
      <img
        className={logo.photo}
        src={!src || src.length === 0 ? photo : src}
        alt='user logo <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>'
      />
    </div>
  )
}
export default Logo
