import Layout from '@/app/layout'
import type { NextPageWithLayout } from '@/pages/_app'
import { type ReactElement } from 'react'

const Page: NextPageWithLayout = () => {
  return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout name='App'>{page}</Layout>
}

export async function generateMetadata(ctx: any) {
  return {
    title: ctx.name
  }
}

export default Page
