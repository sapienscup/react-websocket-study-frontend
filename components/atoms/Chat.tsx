import CustomButton from '@/components/atoms/CustomButton'
import { useEffect, useRef, useState } from 'react'
// import { chatListen, chatWrite } from '@/app/api/sockets'
import ChatInput from '@/components/atoms/ChatInput'
import Switch from '@/components/atoms/Switch'
import {
  get_public_pusher_cluster,
  get_public_pusher_key,
  get_pusher_channel_name,
  get_pusher_event_name
} from '@/envs'
import { fromUnixTime } from 'date-fns'
import Pusher from 'pusher-js'
import { chatApiSendMsg } from '@/app/api/chat'

interface Sender {
  name: string
}

interface RootObject {
  sender: Sender
  color: string
  timestamp: number
  message: string
}

class ChatMsgType {
  public static USER_TEXT: string = 'USER_TEXT'
  public static GLOBAL_SYNCHRONIZATION: string = 'GLOBAL_SYNCHRONIZATION'
  public static USER_LOGIN: string = 'USER_LOGIN'
  public static USER_LOGOUT: string = 'USER_LOGOUT'
  public static CONN_QTY: string = 'CONN_QTY'
}

Pusher.logToConsole = true

let pusher = new Pusher(get_public_pusher_key(), {
  cluster: get_public_pusher_cluster()
})

let channel = pusher.subscribe(get_pusher_channel_name())

const Chat = () => {
  let [messages, setMessages] = useState<RootObject[]>([])
  let chatRef = useRef<any>(null)
  let [msgText, setMsgText] = useState<string>('')
  let [isColorMuted, setIsColorMuted] = useState<boolean>(true)
  let [isLockChatBottomActive, setIsLockChatBottomActive] = useState<boolean>(true)
  let [connQty, setConnQty] = useState<number>(0)
  let [chatResponseLoading, setChatResponseLoading] = useState<boolean>(false)

  // if (chatListen) {
  //   chatListen.onmessage = e => {
  //     const incMessage = JSON.parse(e.data)

  //     if (incMessage) {
  //       flushSync(() => {
  //         setMessages([...messages, incMessage])
  //       })
  //     }
  //   }
  // }

  // if (chatWrite) {
  //   chatWrite.onmessage = e => {
  //     const incMessage = JSON.parse(e.data)

  //     if (incMessage) {
  //       flushSync(() => {
  //         setMessages([...messages, incMessage])
  //       })
  //     }
  //   }
  // }

  useEffect(() => {
    channel.bind(get_pusher_event_name(), function (data: RootObject) {
      setMessages([...messages, data])
    })

    const chatDiv = chatRef.current.lastElementChild

    if (isLockChatBottomActive) {
      chatDiv?.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      })
    } else {
      chatDiv?.scrollIntoView(false)
    }
  }, [messages, isLockChatBottomActive])

  const handleCallback = () => {
    if (!msgText) {
      return
    }

    setChatResponseLoading(true)
    chatApiSendMsg(msgText)
    setChatResponseLoading(false)

    setMsgText('')
  }

  const lockAtBottom = () => {
    setIsLockChatBottomActive(!isLockChatBottomActive)
  }

  const muteNameColors = () => {
    setIsColorMuted(!isColorMuted)
  }

  const emojifyMsg = (msg: string) => {
    return {
      __html: msg
        .replace(
          /(\:[a-zA-Z]+\:)/gi,
          "<img width='30px' height='30px' src='emojis/$1.png' class='center-img' onerror=\"this.src='emojis/lul.png'\"></img>"
        )
        .replaceAll(':', '')
    }
  }

  const logByType = (m: any) => {
    if (m.type === ChatMsgType.USER_TEXT) {
      return (
        <div className="flex flex-row my-3">
          <div
            className={`elative
              inline-flex
              items-center
              justify-center
              w-10
              h-10
              overflow-hidden
              bg-gray-100
              rounded-full
              dark:bg-gray-600
              mx-5`}
          >
            <div className="font-medium text-gray-600 dark:text-gray-300">
              {m.sender.name.split(' ').map((e: string) => e[0])}
            </div>
          </div>
          <div className="grid grid-cols-1 bg-[#1E293B] max-w-md rounded-lg p-2.5 thought">
            <div className={`text-md font-bold`} style={{ color: isColorMuted ? m.color : '#FFFFFF' }}>
              {m.sender.name}
            </div>
            <p
              className="text-white antialiased"
              style={{ display: 'inline-block' }}
              dangerouslySetInnerHTML={emojifyMsg(m.message)}
            ></p>
          </div>
          {/* <div className="text-xs text-indigo-400">{fromUnixTime(m.timestamp / 1000).toLocaleString()}</div> */}
        </div>
      )
    } else if (m.type === ChatMsgType.GLOBAL_SYNCHRONIZATION) {
      return (
        <div className="flex flex-row my-3">
          <div className="grid grid-cols-1 bg-indigo-700 rounded-lg p-2.5 w-fit thought">
            <div className="text-xs text-white antialiased">{fromUnixTime(m.timestamp / 1000).toLocaleString()}</div>
          </div>
        </div>
      )
    } else if (m.type === ChatMsgType.USER_LOGIN) {
      return (
        <div className="flex flex-row my-3">
          <div className="grid grid-cols-1 bg-indigo-700 rounded-lg p-2.5 w-fit thought">
            <div className="text-xs text-white antialiased">{m.sender.name} entrou.</div>
          </div>
        </div>
      )
    } else if (m.type === ChatMsgType.USER_LOGOUT) {
      return (
        <div className="flex flex-row my-3">
          <div className="grid grid-cols-1 bg-indigo-700 rounded-lg p-2.5 w-fit thought">
            <div className="text-xs text-white antialiased">{m.sender.name} entrou.</div>
          </div>
        </div>
      )
    } else if (m.type === ChatMsgType.CONN_QTY) {
      setConnQty(m.qty.length)
    }
  }

  return (
    <>
      <div className="text-2xl ml-5 mb-5">Chat</div>
      <div className="text-xs ml-5 mb-5">Connections: {connQty}</div>
      <div className="mx-5">
        <div ref={chatRef} className="dark:bg-slate-800 h-[20rem] gap-10 text-xs overflow-y-scroll scrollbar">
          {messages.map((m: RootObject, index) => {
            return <div key={`m-${index}`}>{logByType(m)}</div>
          })}
          {chatResponseLoading ? <>...</> : <></>}
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4 justify-items-end">
          <ChatInput message={msgText} onMessageChange={setMsgText}></ChatInput>
          <div className="absolute p-2">
            <CustomButton text="Enviar" targetFunction={handleCallback} targetProps={msgText}></CustomButton>
          </div>
          <div>
            <Switch value={isColorMuted} text="Mute color" targetFunction={muteNameColors}></Switch>
          </div>
          <div>
            <Switch value={isLockChatBottomActive} text="Lock at bottom" targetFunction={lockAtBottom}></Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
