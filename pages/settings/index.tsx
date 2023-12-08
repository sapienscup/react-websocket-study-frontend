import Layout from '@/app/layout'
import Loading from '@/components/atoms/Loading'
import ThemeSwitch from '@/components/layout/ThemeSwitch'
import type { NextPageWithLayout } from '@/pages/_app'
import { useState, type ReactElement } from 'react'

const Todos: NextPageWithLayout = () => {
  const [toggleLoading, setToggleLoading] = useState(false)
  const handleToggleLoading = () => {
    setToggleLoading(!toggleLoading)
  }

  return (
    <div className="grid grid-flow-col">
      <div>
        <div className="text-2xl ml-5 mb-5">Configurações</div>
        <div className="ml-5">
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
      <div>
        <div className="text-2xl ml-5 mb-5">Loading Skeleton Test</div>
        <input
          className="ml-5 mb-5 rounded-lg border-blue-400"
          type="checkbox"
          checked={toggleLoading}
          onChange={handleToggleLoading}
        />
        <div className="ml-5">
          {toggleLoading ? (
            <Loading></Loading>
          ) : (
            <div className="w-1/4">
              Tabella aliquam dolorem cognomen. Deleniti talis vestigium. Victoria sumptus deduco acidus tempora canto
              adimpleo virtus tantum eveniet
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Todos.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Configurações">{page}</Layout>
}

export default Todos
