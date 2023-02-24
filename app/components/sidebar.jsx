'use client'
import React from 'react'
import Content from './sidecontent'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default function sidebar({ children }) {
    const [open, setopen] = React.useState(true)
    return (
        <div id='navbar' className={`absolute h-screen ${open ? "w-96" : "w-12"} top-0 duration-300 border-2 right-0 bg-white overflow-y-auto`}>
            <div className='h-10 p-1 flex justify-between font-semibold text-2xl'>
                <span className={`${open ? "visible" : "hidden"}`}>Activity</span>
                {open ? <IoMdCloseCircleOutline className='cursor-pointer hover:scale-125 hover:text-violet-700 hover:bg-white hover:rounded-full' onClick={() => setopen(!open)} />
                    : <BsFillArrowLeftCircleFill className=' cursor-pointer hover:scale-125 hover:text-violet-700 hover:bg-white hover:rounded-full' onClick={() => setopen(!open)} />}
            </div>
            <span className={`${open ? "visible" : "hidden"}`}>
                {children}
            </span>
        </div>
    )
}
