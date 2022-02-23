import iframe from './iframe.module.css'

function Iframe({ src, height, width, title }) {
  return (
    <div className={iframe.iframe}>
      <iframe src={src} height={height} width={width} title={title} />
    </div>
  )
}

export default Iframe
