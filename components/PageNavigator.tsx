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
    <div className="w-0 ml-3">
      <Link href="/profile">
        <div className='mb-2'>
          <CustomButton text={'perfil'}></CustomButton>
        </div>
      </Link>

      <Link href="/settings">
        <div className='mb-2'>
          <CustomButton text={'configurações'}></CustomButton>
        </div>
      </Link>

      <Link href="/todos">
        <div className='mb-2'>
          <CustomButton text={'afazeres'}></CustomButton>
        </div>
      </Link>

      <Link href="/blog">
        <div className='mb-2'>
          <CustomButton text={'blog'}></CustomButton>
        </div>
      </Link>

      <Link href="/chat">
        <div className='mb-2'>
          <CustomButton text={'chat'}></CustomButton>
        </div>
      </Link>

      {arr.map((word, index) => {
        {
          return <div key={index} className='mb-2'>
            <CustomButton text={word}></CustomButton>
          </div>
        }
      })}
    </div>
  )
}

export default PageNavigator
