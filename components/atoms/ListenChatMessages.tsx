import { useSubscription } from '@apollo/client'
import SubscriptionListenMessage from '@/pages/chat/listen.gql'
import { useEffect, useState } from 'react'

type TopicMessageType = {
  topic: string
  key: string
  msg: string
  timestamp: string
}

const ListenChatMessages = () => {
  let [messages, setMessages] = useState<TopicMessageType[]>([])

  const { data, loading } = useSubscription(SubscriptionListenMessage)

  useEffect(() => {
    let message: TopicMessageType = {} as TopicMessageType

    if (data) {
      message = JSON.parse(data?.chatRead)
      setMessages([...messages, message])
    }
  }, [data])

  return (
    <div>
      {messages.map((e: TopicMessageType, index: number) => {
        return (
          <div className="flex flex-row my-3" key={`m-${index}`}>
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
              <div className="font-medium text-gray-600 dark:text-gray-300">LPT</div>
            </div>
            <div className="grid grid-cols-1 bg-[#1E293B] max-w-md rounded-lg p-2.5 thought">
              <div className={`text-md font-bold text-white`}>Você</div>
              <p className="text-white antialiased" style={{ display: 'inline-block' }}>
                {e.msg}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListenChatMessages
