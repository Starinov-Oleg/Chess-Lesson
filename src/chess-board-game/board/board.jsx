import board from './board.module.css'
import Button from '../../ui-library/button-click/button'
import { useState } from 'react'
function Board() {
  const button = { position: 'absolute', top: '70%', left: '45%' }
  const [showButton, setShowButton] = useState(true)
  function start() {
    setShowButton(false)
  }
  return (
    <section className='board'>
      <div className={board.board}>
        {showButton ? <Button message='START' style={button} onClick={start} /> : null}
        <table className={board.chess_board}>
          <tbody>
            <tr>
              <th></th>
              <th>a</th>
              <th>b</th>
              <th>c</th>
              <th>d</th>
              <th>e</th>
              <th>f</th>
              <th>g</th>
              <th>h</th>
            </tr>
            <tr>
              <th>8</th>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
            </tr>
            <tr>
              <th>7</th>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
            </tr>
            <tr>
              <th>6</th>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
            </tr>
            <tr>
              <th>5</th>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
            </tr>
            <tr>
              <th>4</th>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
            </tr>
            <tr>
              <th>3</th>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
            </tr>
            <tr>
              <th>2</th>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
            </tr>
            <tr>
              <th>1</th>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
              <td className={board.dark}></td>
              <td className={board.light}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Board
