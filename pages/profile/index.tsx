import type { ReactElement } from 'react'
import Layout from '@/app/layout'
import type { NextPageWithLayout } from '@/pages/_app'
 
const Todos: NextPageWithLayout = () => {
  return <div className="text-2xl ml-5 mb-5">Perfil</div>
}
 
Todos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Todos
