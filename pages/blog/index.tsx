import { getAllPosts } from '@/app/api/todos'
import Layout from '@/app/layout'
import CustomButton from '@/components/atoms/CustomButton'
import { BlogInfo, BlogPost, GithubInfo } from '@/components/types'
import { get_github_api_key } from '@/envs'
import type { NextPageWithLayout } from '@/pages/_app'
import { useLazyQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/navigation'
import { useState, type ReactElement } from 'react'
import QueryPosts from './posts.gql'
import ChatInput from '@/components/atoms/ChatInput'

const Blog: NextPageWithLayout = () => {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [userId, setUserId] = useState('1')

  function goToSlug(full_name: string) {
    router.push(`/blog/posts/${full_name}`)
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
        id: id
      }
    })
  }

  return (
    <>
      <div className="text-2xl ml-5 mb-5">Lucas Tonussi&apos;s Repositories</div>
      <div className='ml-5 mb-5 grid grid-cols-2 w-36'>
        <div className='w-12'>
          <ChatInput
            message={userId}
            onMessageChange={setUserId}
            targetFunction={postsByUserId}
            targetProps={userId}
          ></ChatInput>
        </div>
        <div className='w-12'>
          <CustomButton text={"Get Posts"} targetFunction={postsByUserId} targetProps={userId}></CustomButton>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 mx-5">
        {posts.map((e: BlogPost) => {
          return (
            <div className="rounded-lg shadow-lg" key={e.id}>
              <div className='grid grid-cols-1 gap-2 p-5'>
                <h1 className='text-2xl'>
                  {e.title}
                </h1>
                <p>
                  {`${e.body.slice(0, 100)}...`}
                </p>
                <div className='w-fit flex justify-end'>
                  <CustomButton text={"Ler"} targetFunction={goToSlug} targetProps={e.id}></CustomButton>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const getStaticProps = (async context => {
  const info = await fetch('https://api.github.com/users/tonussi', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${get_github_api_key()}`
    }
  })

  const infoObj = await info.json()
  let infoParsed: GithubInfo = {} as GithubInfo

  infoParsed = {
    avatar_url: infoObj.avatar_url,
    bio: infoObj.bio,
    name: infoObj.name,
    login: infoObj.login
  } as GithubInfo

  let blog = {
    info: infoParsed,
    repos: await getAllPosts()
  } as BlogInfo

  return { props: { blog } }
}) satisfies GetStaticProps<{
  blog: BlogInfo
}>

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Blog">
    {page}
  </Layout>
}

export default Blog
