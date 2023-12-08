import ChatInput from '@/components/atoms/ChatInput'
import CustomButton from '@/components/atoms/CustomButton'
import { BlogPost } from '@/components/types'
import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import QueryPosts from '@/pages/blog/posts.gql'
import Modal from './Modal'

const BlogContent = () => {
  const [posts, setPosts] = useState([])
  const [userId, setUserId] = useState('1')
  const [pageLimit, setPageLimit] = useState('10')
  const [postToRead, setPostToRead] = useState<BlogPost>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openDialog(post: BlogPost) {
    setPostToRead(post)
    setIsOpen(true)
  }

  const [getPosts] = useLazyQuery(QueryPosts, {
    fetchPolicy: 'network-only',
    onCompleted(data) {
      setPosts(data.user.posts.items)
    }
  })

  const postsByUserIdLimitOffset = (id: string) => {
    getPosts({
      variables: {
        userId: id || '1',
        limit: parseInt(pageLimit),
        offset: 1
      }
    })
  }

  return (
    <>
      {isOpen && <Modal post={postToRead} setIsOpen={setIsOpen}></Modal>}

      <div className="text-2xl ml-5 mb-5">
        Lucas Tonussi&apos; <div className="text-xs">(Graphql / Cassandra)</div>
      </div>
      <div className="ml-5 mb-5 gap-5 grid grid-cols-1 w-60 place-content-start rounded-lg border border-zinc-100 shadow-lg p-5">
        <div>
          <div className="text-xs text-gray-400 mb-2">Id do Usuário</div>
          <ChatInput
            message={userId}
            onMessageChange={setUserId}
            targetFunction={postsByUserIdLimitOffset}
            targetProps={userId}
          ></ChatInput>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-2">Limite página</div>
          <ChatInput
            message={pageLimit}
            onMessageChange={setPageLimit}
            targetFunction={postsByUserIdLimitOffset}
            targetProps={pageLimit}
          ></ChatInput>
        </div>
        <CustomButton
          text={'Buscar posts'}
          targetFunction={postsByUserIdLimitOffset}
          targetProps={pageLimit}
        ></CustomButton>
      </div>

      <div className="grid grid-cols-5 max-h-60 gap-5 py-10 mx-5 pr-3 overflow-y-scroll scrollbar">
        {posts.map((e: BlogPost) => {
          return (
            <div className="rounded-lg shadow-lg" key={e.id}>
              <div className="grid grid-rows-1 gap-2 p-5 place-content-start">
                <h1 className="text-xl">{e.title}</h1>
              </div>
              <div className="grid grid-rows-1 gap-2 p-5 place-content-end">
                <CustomButton text={'Ler'} targetFunction={openDialog} targetProps={e}></CustomButton>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BlogContent
