'use client'
import { BiArrowBack } from 'react-icons/bi'
import Reviewpage from '../../components/reviewpage'
import Firstpage from '../../components/firstpage'
import { useContext, createContext } from 'react';
import React from 'react'
const Usercontext = createContext({});
export default function Home() {
  const [form, setForm] = React.useState({
    pay:'',
    from: '',
    amount: Number,
    paymentreason: '',
    description: '',
    currencytype: '',
});
  const [cont, setcont] = React.useState(false)
  return (
    <div>
      <div className='flex gap-2 text-violet-700 cursor-pointer w-fit ml-7 my-2 duration-500 hover:scale-105'>
        <BiArrowBack className='mt-1' />
        <h1 className='font-semibold' onClick={() => setcont(false)}>Back to previous</h1>
      </div>
      <hr />
      <Usercontext.Provider value={form}>
        {//@ts-ignore      
          cont ? <Reviewpage /> : <Firstpage cont={setcont} />
        }
      </Usercontext.Provider>
    </div>
  )
}
