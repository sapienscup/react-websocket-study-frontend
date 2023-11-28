import { ChatMessage } from '../types'

const ChatInput = (props: ChatMessage) => {
  return (
    <input
      autoFocus={true}
      autoComplete="off"
      name="message"
      className="
        w-full
        p-4.5
        text-white
        font-medium
        rounded-md
        group
        bg-gradient-to-br
        from-indigo-600
        to-blue-500
        group-hover:from-indigo-600
        group-hover:to-blue-500
        hover:text-white
        dark:text-white
        focus:outline-none
        focus:ring-blue-300
        dark:focus:ring-blue-800
      "
      value={props.message}
      onChange={(event) => props.onMessageChange?.(event.target.value)}
    ></input>
  )
}

export default ChatInput
