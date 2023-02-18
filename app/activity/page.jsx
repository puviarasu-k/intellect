'use client'
import React from 'react'
import { BsCashStack } from 'react-icons/bs'
import { AiFillBank } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Axios from 'axios';

async function getData() {
  const res = await Axios.post('http://192.168.3.208:3000/traceGet');
  console.log(res);
}

export default function page() {
  // const data = await getData();
  const [open, setopen] = React.useState(true)
  return (
    <div className=''>
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
      <div className={`absolute h-screen ${open ? "w-96" : "w-20"} top-0 duration-300 border-2 right-0 bg-white overflow-y-auto`}>
        <div className='h-10 p-3 flex justify-between font-semibold text-2xl'>
          <span className={`${open ? "visible" : "hidden"}`}>Activity</span>
          {open ?
            <IoMdCloseCircleOutline className='cursor-pointer' onClick={() => setopen(!open)} /> : <BsFillArrowLeftCircleFill className='cursor-pointer' onClick={() => setopen(!open)}/>
          }

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
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded' onClick={console.log("lsdfcs")}>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Verify</button>
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
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded' onClick={console.log("lsdfcs")}>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Verify</button>
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
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded' onClick={console.log("lsdfcs")}>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Verify</button>
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
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded' onClick={console.log("lsdfcs")}>Reject</button>
                <button className='hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded'>Verify</button>
              </section>
            </div>
          </div>
          <div className=' ml-7 h-14 border-2 w-1 bg-black'>

          </div>
        </div>
      </div>
      {/* <div class="max-w-lg mx-auto p-8">
        <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
          <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
            Why do they call it Ovaltine?
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div> */}
      {/* <br /> */}
      <div>
        <details className='open:bg-white mt-10 border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' open>
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            BILL
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' open>
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            CURRENT
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' open>
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            INVESTMENT
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' open>
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            SAVINGS
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
    </div>
  )
}