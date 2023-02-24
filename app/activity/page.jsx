import React from 'react'
import { BsCashStack } from 'react-icons/bs'
import { AiFillBank } from 'react-icons/ai'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import Navbar from '../components/sidebar'
import Content from '../components/sidecontent'
import { Suspense } from "react";
import Loading from './loading'

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

      <Navbar>
        <Suspense fallback={<><Loading/><Loading/><Loading/><Loading/></>}>
          <Content />
        </Suspense>
      </Navbar>
      <div>
        <details className='open:bg-white mt-10 border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg'>
          <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
            BILL
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' >
          <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
            CURRENT
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' >
          <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
            INVESTMENT
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' >
          <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
            SAVINGS
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
    </div>
  )
}
