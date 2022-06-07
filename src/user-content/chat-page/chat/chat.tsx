import React from 'react'

import AddMEssagesForm from './add-messages-form/add-messages-form'
import Messages from './messages/messages'

function Chat() {
  return (
    <div>
      <Messages />
      <AddMEssagesForm />
    </div>
  )
}
export default Chat
