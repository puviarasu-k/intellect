import React from 'react'
import { GiConfirmed } from 'react-icons/gi'

export default function popup({review}) {
  console.log(review);
  return (
    <div className={`shadow-2xl w-[40%] h-[60%] border-2 mt-10 bg-white fixed flex flex-col justify-evenly duration-1000 ease-in-out`}>
      <section className='flex justify-between'>
        <h1></h1>
        <GiConfirmed className='w-14 h-14 text-green-600' ></GiConfirmed>
        <h1 className='text-3xl pr-4 cursor-pointer hover:scale-125' onClick={()=>review(false)}>x</h1>
      </section>
      <h1 className='text-violet-700 font-semibold text-center'>SUCCESS!</h1>
    </div>
  )
}
