import { useSubscription } from "@apollo/client"
import SubscriptionWriteMessage from '@/pages/chat/write.gql'

type WriteChatProps = {
  msg: string
}

const WriteChatMessage = (props: WriteChatProps) => {
  const { data, loading } = useSubscription(SubscriptionWriteMessage, { variables: { msg: props.msg } })
  return <></>
}

export default WriteChatMessage
