import type { ReactElement } from 'react'
import Layout from '@/app/layout'
import type { NextPageWithLayout } from '@/pages/_app'
// import ThemeChanger from '@/components/layout/ThemeChanger'
import ThemeSwitch from '@/components/layout/ThemeSwitch'
 
const Todos: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-2xl ml-5 mb-5">Configurações</div>
      <div className="ml-5">
        <ThemeSwitch></ThemeSwitch>
        {/* <ThemeChanger></ThemeChanger> */}
      </div>
    </>
  )
}
 
Todos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Todos
