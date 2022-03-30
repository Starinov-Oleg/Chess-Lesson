interface MessageItemType {
  url: string
  author: string
  text: string
}
function MessageItem() {
  const message: MessageItemType = {
    url: 'http:check.ru',
    author: 'Oleg',
    text: 'Check message',
  }
  return (
    <div>
      <img src={message.url} alt='' />
      {message.text}
      <hr />
    </div>
  )
}
export default MessageItem
