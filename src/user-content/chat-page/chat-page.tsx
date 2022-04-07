import React from 'react'
import chatpagecss from './chat-page.module.css'
import Chat from './chat/chat'

function ChatPage() {
  return (
    <div className={chatpagecss.chatcss}>
      <Chat />
    </div>
  )
}

export default ChatPage
