import PageNavigator from '../PageNavigator'
import ContainerCentral from './ContainerCentral'
import TwoColumnGrid from './TwoColumnGrid'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend',
  description: 'Description of the frontend'
}

function GenericPage({ children }: { children: React.ReactNode }) {
  return (
    <ContainerCentral className={montserrat.className}>
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
  )
}

export default GenericPage
