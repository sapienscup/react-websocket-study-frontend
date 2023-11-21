import Layout from '@/app/layout'
import CustomButton from '@/components/atoms/CustomButton'
import type { NextPageWithLayout } from '@/pages/_app'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/navigation'
import type { ReactElement } from 'react'

type GithubInfo = {
  login: string
  avatar_url: string
  name: string
  bio: string
}

type RepoInfo = {
  full_name: string
}

type BlogInfo = {
  info: GithubInfo
  repos: RepoInfo[]
}

type ContextInfo = {
  blog: BlogInfo
}

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
            <div className="mx-3" key={e.full_name}>
              <CustomButton
                text={e.full_name}
                targetFunction={goToSlug}
                targetProps={e.full_name}
              ></CustomButton>
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
      Authorization: `Bearer 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`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const repos = await fetch('https://api.github.com/users/tonussi/repos', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer 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`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const infoObj = await info.json()
  const reposObj = await repos.json()

  let reposParsed: RepoInfo[] = []

  reposObj.forEach((element: any) => {
    reposParsed.push({ full_name: element.full_name.split('/')[1] })
  })

  let infoParsed: GithubInfo = {
    avatar_url: infoObj.avatar_url,
    bio: infoObj.bio,
    name: infoObj.name,
    login: infoObj.login
  } as GithubInfo

  let blog = {
    info: infoParsed,
    repos: reposParsed
  } as BlogInfo

  return { props: { blog } }
}) satisfies GetStaticProps<{
  blog: BlogInfo
}>

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Blog
