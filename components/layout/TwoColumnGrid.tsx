'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import Loading from '../atoms/Loading'

function TwoColumnGrid(props: any) {
  const { navigator, features } = props.children

  const ref = useRef<any>(null)

  const [width, setWidth] = useState(0)
  const [layout, setLayout] = useState('')

  useEffect(() => {
    setWidth(ref.current?.offsetWidth)

    if (width >= 2048) {
      setLayout('grid grid-cols-[300px_minmax(900px,_1fr)] gap-3')
    } else {
      setLayout('grid grid-flow-row-dense gap-3')
    }
  }, [width, ref.current?.offsetWidth])

  return (
    <div ref={ref} className={layout}>
      <div className="border h-fit mt-5 py-5 rounded-lg drop-shadow-lg">{navigator}</div>

      <div className="border h-full my-5 py-5 rounded-lg drop-shadow-lg">
        {features}
      </div>
    </div>
  )
}

export default TwoColumnGrid
