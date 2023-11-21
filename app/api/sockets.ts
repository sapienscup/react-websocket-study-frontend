const CHAT_HOST_LISTENER = `ws://${process.env.API_HOST ?? '35.226.79.187'}:${process.env.API_PORT ?? 8000}/chat/ws`
const CHAT_HOST_WRITER = `ws://${process.env.API_HOST ?? '35.226.79.187'}:${process.env.API_PORT ?? 8000}/chat/ws/send`

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

export const chatListen = singletonChatSocket.ListenToChat()
export const chatWrite = singletonChatSocket.WriteToChat()
