import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { AiOutlineClockCircle } from 'react-icons/ai'
export default function templatecontent() {
    const array = [1, 2, 3, 4, 5, 6, 76, 7,]
    return (
        <>
            {
                array.map((item) => (
                    <div key={item} className='flex flex-col gap-3'>
                        <section className='flex justify-between'>
                            <section className='flex'>
                                <CiDeliveryTruck />
                                <span className='text-xs'>testyacc</span>
                            </section>
                            <section className='flex'>
                                <AiOutlineClockCircle />
                                <span className='text-xs'>09/02/2023</span>
                            </section>
                        </section>
                        <h1 className='ml-5 text-sm'>AM0L00710</h1>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}
