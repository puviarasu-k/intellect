import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { RiErrorWarningLine } from 'react-icons/ri'
import { TbWaveSawTool, TbNotes } from 'react-icons/tb'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { FaRegComments } from 'react-icons/fa'
import Profile from './profile'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex w-full h-12 bg-violet-700 justify-between'>
            <div className='flex'>
                <GoThreeBars className='w-10 h-10 cursor-pointer hover:scale-105 hover:text-white' />
                <h1 className='text-white font-bold text-4xl'>IGTBANK</h1>
            </div>
            <div className='flex gap-7'>
                <Profile />
                <TbNotes className='w-8 h-8 hover:text-white  cursor-pointer mt-1' />
                <FaRegComments className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
                <div className='group'>
                    <Link href="/activity"><MdOutlineLibraryBooks className='w-8 h-8 hover:text-white cursor-pointer mt-1' /></Link>
                    <h1 className='group-hover:block hidden text-white absolute rounded bg-slate-500 mt-1 px-3 select-none'>Activity</h1>
                </div>
                <TbWaveSawTool className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
                <RiErrorWarningLine className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
            </div>
        </div>
    )
}
