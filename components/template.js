import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function template() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8,]
    const values = [2, 4, 6, 8]
    const [list, setlist] = React.useState(2)
    const [data, setdata] = React.useState(Array.from({ length: list }))
    const ref = React.useRef()
    console.log(list);
    const click = (item)=>{
        console.log(item); 
        ref.current.className = "bg-violet-700"
    }
    return (
        <div>
            <section className='p-6 gap-4'>
                <h1 className=''>Choose an account to pay</h1><br />
                <input className='w-56 h-8 border-2 pl-2' placeholder='Search accounts' />
            </section>
            <hr />
            <div className='flex justify-between p-2'>
                <h1 className='cursor-pointer' >Name ↑</h1>
                <h1 className='cursor-pointer' >Last transaction ↓</h1>
            </div>
            <hr />
            {
                data.map((item) => (
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
            <section className='border-2 h-14 flex justify-around'>
                <select id='currencytype' onClick={(e) => click(e.target.value)} className="w-20 h-10 rounded text-center p-1 border-2 border-violet-700">
                    {
                        values.map((item, index) => (
                            <option key={index} id='currencytype' className='w-20'>{item}</option>
                        ))
                    }
                </select>

                <nav>
                    <ul class="pagination total-link flex border-2">
                        {
                            array.map((item) => {
                                return (
                                    <li ref={ref} id={item} onClick={()=>click(item)} className='text-center rounded w-10 border-2 border-violet-700 hover:bg-violet-700 hover:text-white active'>
                                        <a class="active" >{item}</a>
                                    </li>)
                            })
                        }
                    </ul>
                </nav>
            </section>
        </div>
    )
}
