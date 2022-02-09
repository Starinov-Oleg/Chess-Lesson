import iframe from './iframe.module.css'

function Iframe(props) {
  return <div className={iframe.iframe} dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }} />
}

export default Iframe
