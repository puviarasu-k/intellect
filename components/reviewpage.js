import React from 'react'
import { TiTickOutline } from 'react-icons/ti'
import { MdRateReview } from 'react-icons/md'
import Popup from '../components/popup'

export default function reviewpage() {
    const [review,setreview] = React.useState(false)
    return (
        <div className='flex flex-col items-center gap-5'>
            <MdRateReview className='w-20 h-20' />
            <h1 className='text-3xl'>Review and confirm</h1>
            <div className='flex'>
                <TiTickOutline className='w-10 h-10 bg-violet-700 text-white rounded-full' /><hr className='border-violet-700 border-dashed border-2 w-48 mt-5' /><TiTickOutline className='w-10 h-10 bg-violet-700 text-white rounded-full' />
            </div>
            <p className='text-sm'>Please your details to make sure all the details are correct</p>
            <div className='flex flex-col w-3/5'>
                <h1>accounttrster will recieve</h1>
                <hr className='border-1'></hr>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Execute from</h1>
                    <h1 className=''>chandru</h1>
                    <h1>34.00 THB</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Charge by</h1>
                    <h1 className=''>chandru</h1>
                    <h1>34.00 THB</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Payment reason</h1>
                    <h1 className=''>chandru</h1>
                    <h1>34.00 THB</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Payment type</h1>
                    <h1 className=''>chandru</h1>
                    <h1>34.00 THB</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Purpose code</h1>
                    <h1 className=''>chandru</h1>
                    <h1>34.00 THB</h1>
                </div>
                <hr className='border-1'></hr>
            </div>
            <div className='flex gap-8'>
                <button className='text-violet-800 hover:scale-105 duration-300'>CANCEL</button>
                <button className='border-violet-800 border-2 px-2 rounded text-violet-800 hover:scale-105 duration-300'>EDIT PAYMENT DETAILS</button>
                <button className='border-violet-800 border-2 px-2 rounded text-violet-800 hover:scale-105 duration-300'>SAVE AS DRAFT</button>
                <button className='px-2 h-10 bg-violet-800 text-white rounded-lg hover:scale-105 duration-300' onClick={()=>setreview(true)}>CONTINUE</button>
            </div>
            <Popup className={`${review?"visible":"hidden"}`} review={review}/>
        </div>

    )
}
