import React from 'react'

export default function template() {
    return (
        <div>
            <section className='p-6 gap-4'>
                <h1 className=''>Choose an account to pay</h1><br />
                <input className='w-56 h-8 border-2 pl-2' placeholder='Search accounts' />
            </section>
            <hr />
            <div className='flex justify-between p-2'>
                <h1 className='cursor-pointer'>Last transaction ↓</h1>
                <h1 className='cursor-pointer'>Name ↑</h1>
            </div>
            <hr />
        </div>
    )
}
