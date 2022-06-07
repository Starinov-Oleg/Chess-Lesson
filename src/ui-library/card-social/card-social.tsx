import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import photo from '../../assets/pages/chess-play/user.png'
import Button from '../button-click/button'
import Passport from './passport-block/passport-block'
import Statistic from './statistic-block/statistic-block'

//import Logo from '../logo/logo'
interface CardSocialProps {
  style?: { [key: string]: string }
  text?: string
  src: string
  alt: string
  fullname: string
  onClick1?: () => void
  onClick2?: () => void
  message1: string
  message2: string
  followed: boolean
  showbutton?: boolean
  showpassport?: boolean
  showstatistic?: boolean
  user: any
}
interface StyledCardSocialProps {
  position?: boolean | string
}
const StyledCardSocial = styled.div<StyledCardSocialProps>`
  position: absolute;
`
function CardSocial({
  style,
  text,
  src,
  alt,
  fullname,
  onClick1,
  onClick2,
  message1,
  message2,
  followed,
  showbutton,
  showpassport,
  showstatistic,
  user,
}: CardSocialProps) {
  const stylebutton = { width: '3rem', height: '3rem', padding: '0px' }
  const styleimg = { width: '100%' }
  return (
    <div className={`card `} style={style}>
      <NavLink to={'/user/' + user + '/post'}>
        <img src={!src || src.length === 0 ? photo : src} alt={alt} style={styleimg} />
      </NavLink>
      {showbutton ? (
        <StyledCardSocial className={`text-center `}>
          {followed ? (
            <Button onClick={onClick1} message={message1} style={stylebutton} />
          ) : (
            <Button onClick={onClick2} message={message2} style={stylebutton} />
          )}
        </StyledCardSocial>
      ) : null}
      <div className='text-center'>
        <h5 className='card-title'>{fullname}</h5>
        <h5 className='card-title'>{text}</h5>
      </div>

      {showpassport ? <Passport /> : null}
      {showstatistic ? <Statistic /> : null}
    </div>
  )
}
export default CardSocial
/**HERE NEED ADD LOGO component and display different for different page */
