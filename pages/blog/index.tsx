import Layout from '@/app/layout'
import ChatInput from '@/components/atoms/ChatInput'
import CustomButton from '@/components/atoms/CustomButton'
import { BlogPost } from '@/components/types'
import type { NextPageWithLayout } from '@/pages/_app'
import { useLazyQuery } from '@apollo/client'
import { useState, type ReactElement } from 'react'
import QueryPosts from './posts.gql'

const Blog: NextPageWithLayout = () => {
  const [posts, setPosts] = useState([])
  const [userId, setUserId] = useState('1')
  const [postToRead, setPostToRead] = useState<BlogPost>()

  function openDialog(post: BlogPost) {
    setPostToRead(post)
  }

  const [getPosts] = useLazyQuery(QueryPosts, {
    fetchPolicy: 'network-only',
    onCompleted(data) {
      setPosts(data.user.posts)
    }
  })

  const postsByUserId = (id: string) => {
    getPosts({
      variables: {
        id: id,
        limit: null,
        offset: null
      }
    })
  }

  return (
    <>
      <div className="text-2xl ml-5 mb-5">Lucas Tonussi&apos;s Repositories</div>
      <div className="ml-5 mb-5 gap-3 grid grid-cols-1 w-36">
        <div>Id do Usuário</div>
        <div className="grid grid-cols-2 gap-3">
          <ChatInput
            message={userId}
            onMessageChange={setUserId}
            targetFunction={postsByUserId}
            targetProps={userId}
          ></ChatInput>
          <div className='w-20'>
            <CustomButton text={'Get Posts (Graphql)'} targetFunction={postsByUserId} targetProps={userId}></CustomButton>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 max-h-96 mx-5 pr-3 overflow-y-scroll scrollbar">
        {posts.map((e: BlogPost) => {
          return (
            <div className="rounded-lg shadow-lg" key={e.id}>
              <div className="grid grid-rows-1 gap-2 p-5 place-content-end">
                <h1 className="text-xl">{e.title}</h1>
                <p>{`${e.body.slice(0, 100)}...`}</p>
                <div className="w-fit">
                  <CustomButton text={'Ler'} targetFunction={openDialog} targetProps={e}></CustomButton>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

// export const getStaticProps = (async context => {
//   const info = await fetch('https://api.github.com/users/tonussi', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/vnd.github+json',
//       Authorization: `Bearer ${get_github_api_key()}`
//     }
//   })

//   const infoObj = await info.json()
//   let infoParsed: GithubInfo = {} as GithubInfo

//   infoParsed = {
//     avatar_url: infoObj.avatar_url,
//     bio: infoObj.bio,
//     name: infoObj.name,
//     login: infoObj.login
//   } as GithubInfo

//   let blog = {
//     info: infoParsed,
//     repos: await getAllPosts()
//   } as BlogInfo

//   return { props: { blog } }
// }) satisfies GetStaticProps<{
//   blog: BlogInfo
// }>

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Blog">
    {page}
  </Layout>
}

export default Blog
