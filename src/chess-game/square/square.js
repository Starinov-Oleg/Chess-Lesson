import squarestyle from './square.module.css'

function Square(props) {
  return (
    <button className={squarestyle.square} key={props.key} style={props.style} onClick={props.onCLick}>
      {props.value}
    </button>
  )
}

export default Square
