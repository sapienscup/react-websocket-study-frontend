import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Layout from '@/app/layout'
import { getAllPosts } from '@/app/api/todos'
import { get_github_api_key } from '@/envs'
import { Post, Repo } from '@/components/types'


// export const getStaticProps = (async context => {
//   const res = await fetch(`https://api.github.com/repos/tonussi/${context.params?.slug}`, {
//     method: 'GET',
//     headers: {
//       Accept: 'application/vnd.github+json',
//       Authorization: `Bearer ${get_github_api_key()}`,
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })

//   const repo = await res.json()

//   return { props: { repo } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }>


export async function getStaticPaths() {
  // const posts = await getAllPosts()

  return {
    paths: {
      params: {
        slug: '',
      },
    },
    fallback: false,
  }
}

export default function Page(context: any) {
  return (
    <Layout name="Blog">
      <div className="text-2xl ml-5 mb-5">Informações do repositório</div>
      <div className="ml-5">
      </div>
    </Layout>
  )
}
