import React from 'react'
import { BsCashStack } from 'react-icons/bs'
import { AiFillBank } from 'react-icons/ai'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'

export default function page() {
  return (
    <div>
      <div className='flex gap-5 justify-around'>
        <div className='border-2 h-24 w-64 rounded border-violet-700 mt-5 hover:bg-violet-700 duration-300 hover:text-white cursor-pointer'>
          <h1 className='mt-4 ml-4 flex'><AiFillBank className='mt-1' />&nbsp;All Accounts&nbsp;<span className='rounded-lg border-white border-2'>40</span></h1>
        </div>
        <div className='border-2 h-24 w-64 rounded border-violet-700 mt-5 hover:bg-violet-700 duration-300 hover:text-white cursor-pointer'>
          <h1 className='mt-4 ml-4 flex'><BsCashStack className='mt-1' />&nbsp;Cash Accounts&nbsp;<span className='rounded-lg border-white border-2'>20</span></h1>
          <h1 className='text-2xl ml-4 font-thin'>0.00 THB</h1>
        </div>
        <div className='border-2 h-24 w-64 rounded border-violet-700 mt-5 hover:bg-violet-700 duration-300 hover:text-white cursor-pointer'>
          <h1 className='mt-4 ml-4 flex'><FaFileInvoiceDollar className='mt-1' />&nbsp;Bank Loans&nbsp;<span className='rounded-lg border-white border-2'>10</span></h1>
          <h1 className='text-2xl ml-4 font-thin'>0.00 THB</h1>
        </div>
        <div className='border-2 h-24 w-64 rounded border-violet-700 mt-5 hover:bg-violet-700 duration-300 hover:text-white cursor-pointer'>

        </div>
      </div>
      <div className='absolute h-screen w-96 top-0 border-2 right-0 bg-white overflow-y-auto'>
      <div>
          <div className='ml-4 rounded w-80 h-48 border-2 flex gap-2 space-y-3'>
            <BsClockHistory className='ml-2 mt-3' />
            <div>
              <h1 className='text-sm font-semibold'>Payment batch is pending for your approval</h1>
              <h1 className='text-sm'>A group of book transfer payment(s) from the </h1>
              <h1 className='text-sm'>batch with</h1>
              <h1 className='text-sm'>has been initiated</h1>
              <h1 className='text-sm'>1 payment of are pending your</h1>
              <h1 className='text-sm'>approval</h1>
              <h1 className='text-sm text-violet-700 cursor-pointer'>View batch</h1>
              <section className='flex justify-between'>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded'>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Approve</button>
              </section>
            </div>
          </div>
          <div className=' ml-7 h-14 border-2 w-1 bg-black'>

          </div>
        </div>
        <div>
          <div className='ml-4 rounded w-80 h-48 border-2 flex gap-2 space-y-3'>
            <BsClockHistory className='ml-2 mt-3' />
            <div>
              <h1 className='text-sm font-semibold'>Payment batch is pending for your approval</h1>
              <h1 className='text-sm'>A group of book transfer payment(s) from the </h1>
              <h1 className='text-sm'>batch with</h1>
              <h1 className='text-sm'>has been initiated</h1>
              <h1 className='text-sm'>1 payment of are pending your</h1>
              <h1 className='text-sm'>approval</h1>
              <h1 className='text-sm text-violet-700 cursor-pointer'>View batch</h1>
              <section className='flex justify-between'>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded'>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Approve</button>
              </section>
            </div>
          </div>
          <div className=' ml-7 h-14 border-2 w-1 bg-black'>

          </div>
        </div>
        <div>
          <div className='ml-4 rounded w-80 h-48 border-2 flex gap-2 space-y-3'>
            <BsClockHistory className='ml-2 mt-3' />
            <div>
              <h1 className='text-sm font-semibold'>Payment batch is pending for your approval</h1>
              <h1 className='text-sm'>A group of book transfer payment(s) from the </h1>
              <h1 className='text-sm'>batch with</h1>
              <h1 className='text-sm'>has been initiated</h1>
              <h1 className='text-sm'>1 payment of are pending your</h1>
              <h1 className='text-sm'>approval</h1>
              <h1 className='text-sm text-violet-700 cursor-pointer'>View batch</h1>
              <section className='flex justify-between'>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded'>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Approve</button>
              </section>
            </div>
          </div>
          <div className=' ml-7 h-14 border-2 w-1 bg-black'>

          </div>
        </div>
        <div>
          <div className='ml-4 rounded w-80 h-48 border-2 flex gap-2 space-y-3'>
            <BsClockHistory className='ml-2 mt-3' />
            <div>
              <h1 className='text-sm font-semibold'>Payment batch is pending for your approval</h1>
              <h1 className='text-sm'>A group of book transfer payment(s) from the </h1>
              <h1 className='text-sm'>batch with</h1>
              <h1 className='text-sm'>has been initiated</h1>
              <h1 className='text-sm'>1 payment of are pending your</h1>
              <h1 className='text-sm'>approval</h1>
              <h1 className='text-sm text-violet-700 cursor-pointer'>View batch</h1>
              <section className='flex justify-between'>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded'>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Approve</button>
              </section>
            </div>
          </div>
          <div className=' ml-7 h-14 border-2 w-1 bg-black'>

          </div>
        </div>
      </div>
    </div>
  )
}
