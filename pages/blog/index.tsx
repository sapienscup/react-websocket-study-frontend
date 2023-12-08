import Layout from '@/app/layout'
import BlogContent from '@/components/atoms/BlogContent'
import type { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'

const Blog: NextPageWithLayout = () => {
  return <BlogContent></BlogContent>
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
  return <Layout name="Blog">{page}</Layout>
}

export default Blog
