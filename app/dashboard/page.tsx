'use client'
import { BiArrowBack } from 'react-icons/bi'
import Reviewpage from '../../components/reviewpage'
import Firstpage from '../../components/firstpage'
import React from 'react'
export default function Home() {
  const [cont, setcont] = React.useState(false)
  return (
    <div>
      <div className='flex gap-2 text-violet-700 cursor-pointer w-fit ml-7 my-2 duration-500 hover:scale-105'>
        <BiArrowBack className='mt-1' />
        <h1 className='font-semibold' onClick={()=>setcont(false)}>Back to previous</h1>
      </div>
      <hr />
      {//@ts-ignore
        cont ? <Reviewpage /> : <Firstpage cont={setcont} />
      }
    </div>
  )
}
