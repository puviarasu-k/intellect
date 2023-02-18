import { FaWallet } from 'react-icons/fa'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { GrNotes } from 'react-icons/gr'

export default function Recent({fill}) {
    const [data, setdata] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:4000/recentList')
            .then((response) => response.json())
            .then((data) => {
                setdata(data)
                console.log(data);
            });
    }, [])
    const click = (item) => {
        fill(item)
    }

    return (<>
        <div className='flex p-4 gap-2'>
            <GrNotes className='m-2' />
            <h1>Pay someone template(1)</h1>
        </div>
        <select name="cars" id="currencytype" className='border-2 h-9 w-56 ml-3'>
            <option id='currencytype' value="Value">Select template</option>
        </select>
        <hr className='mt-8' />
        <div className='overflow-y-auto h-screen'>
            <h1 className='antialiased p-2'>Recent payments</h1>
            {data.map((item) => (
                <div className='flex cursor-pointer mb-4' key={item.ID} onClick={()=>click(item)}>
                    <FaWallet className='m-2' />
                    <div className='space-y-1'>
                        <section className='flex justify-between'>
                            <h1 className='text-xs'>{item.entryTime}</h1>
                            <h1 className='text-xs'>{item.amount} {item.currencyType}</h1>
                        </section>
                        <h1 className='text-xs'>{item.paymentReason}</h1>
                        <h1 className='text-xs text-violet-700'><span className='text-black'>From:</span>{item.pay}</h1>
                        <h1 className='text-xs text-violet-700'><span className='text-black'>To:</span>{item.place}</h1>
                        <h1 className='text-xs inline-flex text-violet-700'><GoPrimitiveDot className='w-3 h-3 mt-1 text-violet-700' /><span className='text-black'>pending verification from&nbsp;</span><CgProfile className='mt-1 text-black' />&nbsp;multiple people</h1>
                    </div>
                    <div>
                        <AiOutlineFileAdd className='m-2' />
                    </div>
                </div>
            ))
            }
        </div>
    </>
    )
}
