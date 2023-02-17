import React from 'react'
import { GiConfirmed } from 'react-icons/gi'

export default function popup({review}) {
  console.log(review);
  return (
    <div className={`${review ? "transition-all duration-1000" : "bg-slate-900"} shadow-2xl w-[40%] h-[60%] border-2 mt-10 bg-white fixed flex flex-col justify-evenly items-center`}>
      {/* <section className='flex justify-between'> */}
        <GiConfirmed className='w-14 h-14 text-green-600' ></GiConfirmed>
      {/* </section> */}
      <h1 className='text-violet-700 font-semibold text-center'>SUCCESS!</h1>
    </div>
  )
}
