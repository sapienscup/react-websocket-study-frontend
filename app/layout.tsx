import './globals.css'
import type { Metadata } from 'next'
import ContainerCentral from '@/components/layout/ContainerCentral'
import TwoColumnGrid from '@/components/layout/TwoColumnGrid'
import PageNavigator from '@/components/PageNavigator'
import { ThemeProviders } from '@/components/layout/ThemeProviders'

import { Montserrat } from 'next/font/google'
import Head from 'next/head'
 
const websiteFont = Montserrat({
  weight: '400',
  subsets: ['latin'],
})


export default function RootLayout({ children, name = "App" }: { children: React.ReactNode, name: string }) {
  return (
    <ThemeProviders>
      <Head>
        <title>{name}</title>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <meta property="og:title" content={name} key={name} />
      </Head>

      <main className={`${websiteFont.className} scroll-smooth`}>
        <ContainerCentral>
          {{
            columns: (
              <TwoColumnGrid>
                {{
                  navigator: <PageNavigator></PageNavigator>,
                  features: children
                }}
              </TwoColumnGrid>
            )
          }}
        </ContainerCentral>
      </main>
    </ThemeProviders>
  )
}
