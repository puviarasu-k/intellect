import React from 'react'
import Button from '../components/button'
import moment from 'moment'
import axios from 'axios'
import { BsClockHistory } from 'react-icons/bs'

async function getData() {
    const response = await axios.get("http://localhost:4000/traceGet?" + "accountNo=" + "c68a50b3-7bcb-4bf9-aaff-2dbb5ca06da9");
    return response.data.query
}
export default async function sidecontent() {
    const data = await getData();
    const Summa = ({ id }) => {
        let date = moment(id).format("hh:mm:ss")
        return (
            <div>
                <p className='text-xs text-gray-700 text-opacity-80'>{date}</p>
            </div>
        );
    };

    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='ml-4 rounded w-80 h-48 border-2 flex gap-2 space-y-3'>
                            <BsClockHistory className={`${item.currentStatus == "ACCEPT" ? "bg-green-500" : "bg-red-600"}ml-2 mt-3`} />
                            <div>
                                {
                                    item.status == "PENDING" ? <h1 className='text-sm font-semibold'>Payment batch is pending for your approval</h1> : item.currentStatus == "IGNORE" ? <h1 className='text-sm font-semibold'>The payment was rejected</h1> : <h1 className='text-sm font-semibold'>The payment has sent to the bank</h1>
                                }
                                <h1 className='text-sm'>A group of book transfer payment(s) from the </h1>
                                <h1 className='text-sm'>batch TLA_SPLIT_3 with PAY_BATCH_436745</h1>
                                <h1 className='text-sm'>has been initiated</h1>
                                <h1 className='text-sm'>1 payment of {item.amount} {item.currencyType} are pending your</h1>
                                <h1 className='text-sm'>approval</h1>
                                <h1 className='text-sm text-violet-700 cursor-pointer'>View batch</h1>
                                <section className={`flex justify-between ${item.currentStatus == "PENDING" ? "visible" : "hidden"}`}>
                                    <Button item={item} />
                                </section>
                            </div>
                        </div>
                        <div className=' ml-7 h-14 w-fit border-l-2'>
                            <Summa id={item.entryTime} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}
