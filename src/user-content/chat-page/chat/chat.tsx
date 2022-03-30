import AddMEssagesForm from './add-messages-form/add-messages-form'
import chatcss from './chat.module.css'
import Messages from './messages/messages'

function Chat() {
  return (
    <div className={chatcss.chatcss}>
      <Messages />
      <AddMEssagesForm />
    </div>
  )
}
export default Chat
