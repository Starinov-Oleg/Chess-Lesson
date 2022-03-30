import { useEffect /*useState */ } from 'react'
import MessageItem from './message-item/message-item'
const ws = new WebSocket('#') /**TODO here from anouther place */
function Messages() {
  const messages: Array<number> = [1, 2, 3, 4]
  // const [messages, setMessage] = useState()
  useEffect(() => {
    ws.addEventListener('message', e => {
      //setMessage(JSON.parse(e.data)) data from SERVER
    })
  })
  return (
    <div style={{ height: '200px', overflowY: 'scroll' }}>
      Messages
      {messages.map((m: any, index) => (
        <MessageItem key={index} />
      ))}
    </div>
  )
}

export default Messages
