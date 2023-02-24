'use client'
import React from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
export default function profile() {
    const name = typeof window !== 'undefined' ? localStorage.getItem("username") : null
    return (
        <div className='flex cursor-pointer gap-1 group'>
            <CgProfile className='text-white w-10 h-10' />
            <a className='group-hover:block hidden text-white mt-12  absolute rounded bg-slate-500 p-3 hover:bg-violet-700 hover:text-white select-none' href='/'>Log out</a>
            <h1 className='text-white textt-3xl from-neutral-300 text-center pt-2'>name</h1>
            <BsFillCaretDownFill className='mt-3 text-white' />
        </div>
    )
}
