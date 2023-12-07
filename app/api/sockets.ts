import { get_app_env } from '@/envs'

const CHAT_HOST_LISTENER = `ws://${process.env.API_HOST ?? 'localhost'}:${process.env.API_PORT ?? '8080'}/chat/ws`
const CHAT_HOST_WRITER = `ws://${process.env.API_HOST ?? 'localhost'}:${process.env.API_PORT ?? '8080'}/chat/ws/send`

class SingletonChatSocket {
  private static headers = {
    accept: 'application/json',
    'x-token': 'fake-super-secret-token'
  }
  public static listener = new WebSocket(CHAT_HOST_LISTENER)
  public static writer = new WebSocket(CHAT_HOST_WRITER)

  private static instance: SingletonChatSocket

  private constructor() {}

  public static getInstance(): SingletonChatSocket {
    if (!SingletonChatSocket.instance) {
      SingletonChatSocket.instance = new SingletonChatSocket()
    }

    return SingletonChatSocket.instance
  }

  public ListenToChat() {
    if (SingletonChatSocket.listener) {
      return SingletonChatSocket.listener
    }
  }

  public WriteToChat() {
    if (SingletonChatSocket.writer) {
      return SingletonChatSocket.writer
    }
  }
}

let singletonChatSocket: SingletonChatSocket
let chatListen
let chatWrite

if (get_app_env() === 'development') {
  singletonChatSocket = SingletonChatSocket.getInstance()
  chatListen = singletonChatSocket.ListenToChat()
  chatWrite = singletonChatSocket.WriteToChat()
}

  // if (get_app_env() === 'development') {
  //   if (chatWebsockets.chatListen) {
  //     chatWebsockets.chatListen.onmessage = e => {
  //       const incMessage = JSON.parse(e.data)
  
  //       if (incMessage) {
  //         setMessages([...messages, incMessage])
  //       }
  //     }
  //   }
  
  //   if (chatWebsockets.chatWrite) {
  //     chatWebsockets.chatWrite.onmessage = e => {
  //       const incMessage = JSON.parse(e.data)
  
  //       if (incMessage) {
  //         setMessages([...messages, incMessage])
  //       }
  //     }
  //   }
  // }

// eslint-disable-next-line import/no-anonymous-default-export
export default { chatListen: chatListen, chatWrite: chatWrite }
