import React from 'react'
import card from './card.module.css'

interface CardProps {
  style?: Object
  src: string
  alt: string
  fullname: string
  text: string
}
function Card({ style, src, alt, fullname, text }: CardProps) {
  return (
    <div className={`card ${card.card}`} style={style}>
      <img src={src} className='card-img-top' alt={alt} />
      <div className='card-body'>
        <h5 className='card-title'>{fullname}</h5>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  )
}
export default Card
