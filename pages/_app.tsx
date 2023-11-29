import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import gqlClient from '@/app/api/graphql'

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
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
