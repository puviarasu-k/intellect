'use client'
import React from 'react'
import Axios from "axios"
import Image from 'next/image'
import image from '../public/pngwing.com.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [form, setForm] = React.useState({
    userName: '',
    password: '',
  });
  const [login, setlogin] = React.useState(false)
  const router = useRouter()
  const handleChange = (event: any) => {
    setlogin(false)
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  const submitbtn = async (e: any) => {
    e.preventDefault();
    try {
      const res = await Axios.post('http://192.168.3.208:3000/login', form);
      console.log(res);
      localStorage.setItem("username",res.data.data[0].userName)
      localStorage.setItem("accountno",res.data.data[0].accountNo)
      localStorage.setItem("role",res.data.data[0].profileData)      
      router.push('/dashboard')
    } catch (error) {
      setlogin(true)
    }
  }

  return (
    <>
      <body className='bg-slate-800'>
        <h1 className='text-white text-2xl p-5 font-bold mb-10'>IGT Bank</h1>

        <div className='flex flex-col md:flex-row justify-around'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 ease-in-out duration-300 h-80 w-96 rounded-lg flex flex-col justify-evenly items-center'>
            <div className='flex flex-col'>
              <span className='self-start'>Enter your username</span>
              <input type="text" value={form.userName} id="userName" onChange={handleChange} required placeholder='Username' className="mt-1 pl-2 border-2 rounded-lg h-10 w-80" />
            </div>
            <div className="flex flex-col">
              <span className='self-start'>Enter your password</span>
              <input placeholder='Password' value={form.password} id="password" onChange={handleChange} type="password" className="mt-1 pl-2 border-2 rounded-lg h-10 w-80" />
            </div>
            <button type="button" onClick={submitbtn} className='border-2 rounded-lg bg-violet-500 w-24 h-10 hover:bg-white hover:scale-125 ease-in-out duration-300'>Sign In</button>
            {login ? <span className='text-red-700 font-semibold'>Username or passoword is incorrect</span> : null}
          </div>
          <div>
            <Image src={image} width={400} height={100} className="motion-safe:animate-spin-slow" alt='summa' />
          </div>
        </div>

      </body>
    </>
  )
}
