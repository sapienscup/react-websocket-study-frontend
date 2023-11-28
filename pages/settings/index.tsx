import Layout from '@/app/layout'
import Loading from '@/components/atoms/Loading'
import ThemeSwitch from '@/components/layout/ThemeSwitch'
import type { NextPageWithLayout } from '@/pages/_app'
import { useTranslations } from 'next-intl'
import { useState, type ReactElement } from 'react'

const Todos: NextPageWithLayout = () => {
  const [toggleLoading, setToggleLoading] = useState(false)
  const handleToggleLoading = () => {
    setToggleLoading(!toggleLoading)
  }

  const t = useTranslations('UserProfile')
  const user = {
    firstName: 'Usuári@ do Sistema',
    memberSince: '2008',
    numFollowers: '21'
  }

  return (
    <div className="grid grid-flow-col">
      <div>
        <div className="text-2xl ml-5 mb-5">Configurações</div>
        <div className="ml-5">
          <ThemeSwitch></ThemeSwitch>
          {/* <ThemeChanger></ThemeChanger> */}
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
      <div>
        <section>
          <h1>{t('title', { firstName: user.firstName })}</h1>
          <p>{t('membership', { memberSince: user.memberSince })}</p>
          <p>{t('followers', { count: user.numFollowers })}</p>
        </section>
      </div>
    </div>
  )
}

Todos.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Configurações">{page}</Layout>
}

export default Todos
