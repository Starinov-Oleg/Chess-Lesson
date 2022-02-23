import card from './card.module.css'

function Card({ style, src, alt, title, text }) {
  return (
    <div className={`card ${card.card}`} style={style}>
      <img src={src} className='card-img-top' alt={alt} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  )
}
export default Card
