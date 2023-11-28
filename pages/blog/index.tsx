import { getAllPosts } from '@/app/api/todos'
import Layout from '@/app/layout'
import CustomButton from '@/components/atoms/CustomButton'
import { BlogInfo, ContextInfo, GithubInfo, RepoInfo } from '@/components/types'
import { get_github_api_key } from '@/envs'
import type { NextPageWithLayout } from '@/pages/_app'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/navigation'
import type { ReactElement } from 'react'


const Blog: NextPageWithLayout = context => {
  const contextParsed = context as ContextInfo
  const router = useRouter()

  function goToSlug(full_name: string) {
    router.push(`/blog/posts/${full_name}`)
  }

  return (
    <>
      <div className="text-2xl ml-5 mb-5">Lucas Tonussi&apos;s Repositories</div>

      <div className="grid grid-cols-5 gap-5 mx-5">
        {contextParsed.blog.repos.map((e: RepoInfo) => {
          return (
            <div className="mx-3" key={e.slug}>
              <CustomButton text={e.slug} targetFunction={goToSlug} targetProps={e.slug}></CustomButton>
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
  return <Layout name="Blog">{page}</Layout>
}

export default Blog
