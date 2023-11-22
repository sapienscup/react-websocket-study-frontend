import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Layout from '@/app/layout'
import { getAllPosts } from '@/app/api/todos'

type Repo = {
  name: string
  stargazers_count: number
  size: number
}

export const getStaticProps = (async context => {
  const res = await fetch(`https://api.github.com/repos/tonussi/${context.params?.slug}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer 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`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const repo = await res.json()

  return { props: { repo } }
}) satisfies GetStaticProps<{
  repo: Repo
}>

type Post = {
  slug: string
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post: Post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default function Page(staticProps: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="text-2xl ml-5 mb-5">Informações do repositório</div>
      <div className="ml-5">
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
          name: {staticProps.repo?.name}
        </span>
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          size: {staticProps.repo?.size}
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
          stargazers_count: {staticProps.repo?.stargazers_count}
        </span>
      </div>
    </Layout>
  )
}
