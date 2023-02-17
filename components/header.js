import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { RiErrorWarningLine } from 'react-icons/ri'
import { TbWaveSawTool, TbNotes } from 'react-icons/tb'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { FaRegComments } from 'react-icons/fa'

export default function header() {
    return (
        <div className='flex w-full h-12 bg-violet-700 justify-between'>
            <div className='flex'>
                <GoThreeBars className='w-10 h-10 cursor-pointer hover:scale-105 hover:text-white' />
                <h1 className='text-white font-bold text-4xl'>IGTBANK</h1>
            </div>
            <div className='flex gap-7'>
                <TbNotes className='w-8 h-8 hover:text-white  cursor-pointer mt-1' />
                <FaRegComments className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
                <MdOutlineLibraryBooks className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
                <TbWaveSawTool className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
                <RiErrorWarningLine className='w-8 h-8 hover:text-white cursor-pointer mt-1' />
            </div>
        </div>
    )
}
