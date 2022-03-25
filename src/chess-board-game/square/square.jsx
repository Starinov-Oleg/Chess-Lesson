import { Fragment } from 'react'
import square from './square.module.css'

function Square(props) {
  return (
    <Fragment>
      <td>
        <div
          className={square.square}
          onClick={props.onClick}
          style={props.style}
          key={props.key}
          toggle={props.toggle}>
          {props.value}
        </div>
      </td>
    </Fragment>
  )
}

export default Square
