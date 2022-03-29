import { Fragment } from 'react'
import square from './square.module.css'

interface SquareProps {
  style: Object
  value: string
  key: string
  toggle: string
  onClick: () => void
}

function Square(props: SquareProps) {
  return (
    <Fragment>
      <td>
        <div className={square.square} onClick={props.onClick} style={props.style} key={props.key}>
          {props.value}
        </div>
      </td>
    </Fragment>
  )
}

export default Square
