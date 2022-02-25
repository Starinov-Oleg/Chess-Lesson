import { Fragment } from 'react'
import square from './square.module.css'

function Square(props) {
  return (
    <Fragment>
      <td>
        <button
          className={square.square}
          onClick={props.onClick}
          style={props.style}
          key={props.keyVal}
          toggle={props.toggle}></button>
      </td>
    </Fragment>
  )
}

export default Square
