'use client'

import Link from 'next/link'
import CustomButton from './atoms/CustomButton'
import { useEffect, useState } from 'react'
import { generateWords } from '@/app/api/todos'

function PageNavigator() {
  const [arr, setArr] = useState<string[]>(generateWords(15))

  useEffect(() => {
    setArr(generateWords(15))
  }, []);

  return (
    <div className="grid grid-cols-2 gap-1 m-5">
      <div>
        <Link href="/profile">
          <CustomButton text={'perfil'}></CustomButton>
        </Link>
      </div>

      <div>
        <Link href="/settings">
          <CustomButton text={'configurações'}></CustomButton>
        </Link>
      </div>

      <div>
        <Link href="/todos">
          <CustomButton text={'afazeres'}></CustomButton>
        </Link>
      </div>

      <div>
        <Link href="/blog">
          <CustomButton text={'blog'}></CustomButton>
        </Link>
      </div>

      <div>
        <Link href="/chat">
          <CustomButton text={'chat'}></CustomButton>
        </Link>
      </div>
    </div>
  )
}

export default PageNavigator
