import PageNavigator from '@/components/PageNavigator'
import ContainerCentral from '@/components/layout/ContainerCentral'
import { ThemeProviders } from '@/components/layout/ThemeProviders'
import TwoColumnGrid from '@/components/layout/TwoColumnGrid'
import './globals.css'

import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const websiteFont = Montserrat({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children, name = 'App' }: { children: React.ReactNode; name: string }) {
  return (
    <ThemeProviders>
      <Head>
        <title>{name}</title>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <meta property="og:title" content={name} key={name} />
        <meta property="og:url" content="Canonical link preview URL"></meta>
        <meta property="og:description" content="Descrição de previsão para whatsapp" />
        <meta property="og:image" content="Link preview image URL"></meta>
        <meta property="description" content="Search engine description" />
        <meta property="twitter:description" content="Twitter link preview description"></meta>
        <meta property="twitter:title" content="Twitter link preview title"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:image" content="Twitter link preview image URL"></meta>
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
