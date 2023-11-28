import TodoList from '@/components/TodoList'

import type { ReactElement } from 'react'
import Layout from '@/app/layout'
import type { NextPageWithLayout } from '@/pages/_app'
 
const Todos: NextPageWithLayout = () => {
  return <TodoList></TodoList>
}
 
Todos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout name="Afazeres">
      {page}
    </Layout>
  )
}
 
export default Todos
