'use client'
import React, { useEffect } from 'react'
import { BsCashStack } from 'react-icons/bs'
import { AiFillBank } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import moment from 'moment'
import Axios from 'axios'
export default function page() {
  const [data, setdata] = React.useState([])
  const [count, setcount] = React.useState(false)
  useEffect(() => {
    fetch("http://localhost:4000/traceGet?" + "accountNo=" + "c68a50b3-7bcb-4bf9-aaff-2dbb5ca06da9")
      .then((response) => response.json())
      .then((data) => {
        setdata(data.query)
        console.log(data.query);
      });
  }, [])

  const Summa = ({ id }) => {
    let date = moment(id).format("hh:mm:ss")
    return (
      <div>
        <p className='text-xs text-gray-700 text-opacity-80'>{date}</p>
      </div>
    );
  };

  const [open, setopen] = React.useState(true)
  const actionclick = async (item, status) => {
    const form = {
      ID: item.ID,
      statusCode: item.status,
      accountNo: item.accountNO,
      profileData: "checker",
    }
    const form2 = {
      statusCode: status,
      ID: item.ID,
      profileData: "checker"
    }
    try {
      const res = await Axios.post('http://localhost:4000/traceInsert', form);
      const res2 = await Axios.put('http://localhost:4000/statusUpdate', form2);
      setcount(true)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {count ? <dialog className='w-56 h-32 border-2 absolute backdrop-blur-lg inset-0 border-violet-700' open>
        <p>Changes applied successfully</p>
        <form method="dialog">
          <button onClick={() => setcount(false)} className='border-2 rounded border-violet-700 cursor-pointer hover:bg-violet-700 hover:text-white'>OK</button>
        </form>
      </dialog> : null}
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
      <div className={`absolute h-screen ${open ? "w-96" : "w-12"} top-0 duration-300 border-2 right-0 bg-white overflow-y-auto`}>
        <div className='h-10 p-1 flex justify-between font-semibold text-2xl'>
          <span className={`${open ? "visible" : "hidden"}`}>Activity</span>
          {open ?
            <IoMdCloseCircleOutline className='cursor-pointer hover:scale-125 hover:text-violet-700 hover:bg-white hover:rounded-full' onClick={() => setopen(!open)} /> : <BsFillArrowLeftCircleFill className='ml-2 cursor-pointer hover:scale-125 hover:text-violet-700 hover:bg-white hover:rounded-full' onClick={() => setopen(!open)} />
          }

        </div>

        {data.map((item) => (
          <div className={`${open ? "visible" : "hidden"}`}>
            <div className='ml-4 rounded w-80 h-48 border-2 flex gap-2 space-y-3'>
              <BsClockHistory className={`${item.currentStatus == "ACCEPT" ? "bg-green-500" : "bg-red-600"}ml-2 mt-3`} />
              <div>
                {
                  item.currentStatus == "ACCEPT" ? <h1 className='text-sm font-semibold'>The payment has sent to the bank</h1> : item.currentStatus == "IGNORE" ? <h1 className='text-sm font-semibold'>The payment was rejected</h1> : <h1 className='text-sm font-semibold'>Payment batch is pending for your approval</h1>
                }
                <h1 className='text-sm'>A group of book transfer payment(s) from the </h1>
                <h1 className='text-sm'>batch TLA_SPLIT_3 with PAY_BATCH_436745</h1>
                <h1 className='text-sm'>has been initiated</h1>
                <h1 className='text-sm'>1 payment of {item.amount} {item.currencyType} are pending your</h1>
                <h1 className='text-sm'>approval</h1>
                <h1 className='text-sm text-violet-700 cursor-pointer'>View batch</h1>
                {
                  item.currentStatus == "PENDING" ? <><section className='flex justify-between'>
                    <button className="hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded" onClick={() => actionclick(item, "IGNORE")}>Reject</button>
                    <button className="hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded" onClick={() => actionclick(item, "ACCEPT")}>Verify</button>
                  </section></> : null
                }
              </div>
            </div>
            <div className=' ml-7 h-14 w-fit border-l-2'>
              <Summa id={item.entryTime} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <details className='open:bg-white mt-10 border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg'>
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            BILL
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' >
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            CURRENT
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' >
          <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
            INVESTMENT
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>The mug is round. The jar is round. They should call it Roundtine.</p>
          </div>
        </details>
      </div>
      <div>
        <details className='open:bg-white border-2 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-4 rounded-lg' >
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
