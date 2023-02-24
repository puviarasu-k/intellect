import React from 'react'
import Link from 'next/link';

export default function popup({ content, Logo, topic }) {
    return (
        <div className={`shadow-2xl w-[40%] h-[60%] border-2 items-center mt-10 bg-white fixed flex flex-col justify-evenly`}>
            {Logo}
            <h1 className='text-violet-700 font-semibold text-center'>{topic}</h1>
            <div>
                <h1>{content}</h1>
            </div>
            <h1 className='text-center'>What do you want to do next?</h1>
            <section className='space-x-8'>
                <Link href="/dashboard" className='hover:border-2 border-violet-700 rounded-md p-2'>Go back to payments</Link>
                <a href='/dashboard' className='border-2 border-green-900 p-1 rounded-md'>Make another payment</a>
            </section>
        </div>
    )
}
