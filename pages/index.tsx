import type { ReactElement } from 'react'
import Layout from '@/app/layout'
import type { NextPageWithLayout } from '@/pages/_app'
 
const Page: NextPageWithLayout = () => {
  return <></>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page
