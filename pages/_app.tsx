import { Suspense, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import gqlClient from '@/app/api/graphql'
import Loading from '@/components/atoms/Loading'
import { Provider, Provider as ReduxProvider } from 'react-redux'
import { store } from '@/app/store'


export type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(
    <ApolloProvider client={gqlClient}>
      <Provider store={store}>

      </Provider>
      <Suspense fallback={<Loading></Loading>}>
          <Component {...pageProps} />
      </Suspense>
    </ApolloProvider>
  )
}
