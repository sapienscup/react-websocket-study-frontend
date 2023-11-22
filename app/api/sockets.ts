const CHAT_HOST_LISTENER = `ws://${process.env.API_HOST}:${process.env.API_PORT}/chat/ws`
const CHAT_HOST_WRITER = `ws://${process.env.API_HOST}:${process.env.API_PORT}/chat/ws/send`

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

const singletonChatSocket = SingletonChatSocket.getInstance()

export const chatListen = process.env.API_HOST === 'localhost' ? singletonChatSocket.ListenToChat() : undefined
export const chatWrite = process.env.API_HOST === 'localhost' ? singletonChatSocket.WriteToChat() : undefined
