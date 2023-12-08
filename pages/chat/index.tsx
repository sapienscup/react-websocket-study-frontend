import { type ReactElement } from 'react'
import Layout from '@/app/layout'
import type { NextPageWithLayout } from '@/pages/_app'
import Chat from '@/components/atoms/Chat'

const ChatPage: NextPageWithLayout = () => {
  return <Chat></Chat>
}

ChatPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout name='Chat'>{page}</Layout>
}

export default ChatPage
