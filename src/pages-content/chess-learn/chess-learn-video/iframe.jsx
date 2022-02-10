import iframe from './iframe.module.css'

function Iframe(props) {
  return (
    <div className={iframe.iframe}>
      <iframe src={props.src} height={props.height} width={props.width} title={props.title} />
    </div>
  )
}

export default Iframe
