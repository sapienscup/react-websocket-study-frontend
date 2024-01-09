'use client'

import Link from 'next/link'
import CustomButton from './atoms/CustomButton'

function PageNavigator() {
  return (
    <div className="grid grid-flow-row-dense gap-5 mx-5">
      <div className='w-40 h-7'>
        <Link href="/profile">
          <CustomButton text={'perfil'}></CustomButton>
        </Link>
      </div>

      <div className='w-40 h-7'>
        <Link href="/settings">
          <CustomButton text={'configurações'}></CustomButton>
        </Link>
      </div>

      <div className='w-40 h-7'>
        <Link href="/todos">
          <CustomButton text={'afazeres'}></CustomButton>
        </Link>
      </div>

      <div className='w-40 h-7'>
        <Link href="/blog">
          <CustomButton text={'blog'}></CustomButton>
        </Link>
      </div>

      <div className='w-40 h-7'>
        <Link href="/chat">
          <CustomButton text={'chat'}></CustomButton>
        </Link>
      </div>
    </div>
  )
}

export default PageNavigator
