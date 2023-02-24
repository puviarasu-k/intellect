import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import Main from './components/main'
export default function Home() {
  return (
    <div className='h-screen'>
      <div className='flex gap-2 text-violet-700 cursor-pointer w-fit ml-7 my-2 duration-500 hover:scale-105'>
        <BiArrowBack className='mt-1' />
        <Link className='font-semibold' href="/dashboard" >Back to previous</Link>
      </div>
      <hr />
      <Main />
    </div>
  )
}

