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
        return <div key={index}>{e.msg}</div>
      })}
    </div>
  )
}

export default ListenChatMessages
