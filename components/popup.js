import React from 'react'
import { GiConfirmed } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link';

export default function popup({ review }) {
  console.log(review);
  return (
    <div className={`shadow-2xl w-[40%] h-[60%] border-2 items-center mt-10 bg-white fixed flex flex-col justify-evenly`}>
      
        <GiConfirmed className='w-14 h-14 text-green-600' ></GiConfirmed>
        
      <h1 className='text-violet-700 font-semibold text-center'>SUCCESS!</h1>
      <div>
        <h1 >payment 893479346893-34767 of 34.00 THB</h1>
        <h1 className='ml-14'>to accountester 1212344312</h1>
        <h1 className='ml-16'>has sent for verification to</h1>
        <section className='flex ml-20'>
          <CgProfile className='mt-1 text-black' />
          <h1 className='text-violet-700 font-semibold'>&nbsp;multiple people</h1>
        </section>
      </div>
      <h1 className='text-center'>What do you want to do next?</h1>
      <section className='space-x-8'>
        <Link href="/dashboard" className='hover:border-2 border-violet-700 rounded-md p-2' onClick={() => review(false)}>Go back to payments</Link>
        <button className='border-2 border-green-900 p-1 rounded-md'>Make another payment</button>
      </section>
    </div>
  )
}
