import React from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { BsPlusCircle } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import Recent from '../components/recent'
import Template from '../components/template'
import { TiTickOutline } from 'react-icons/ti'
import { useContext } from "react";
import userContext from "../Usercontext";
import Axios from 'axios'

export default function Firstpage({ cont }) {
    const accoutno = typeof window !== 'undefined' ? localStorage.getItem("accountno") : null
    const [type, settype] = React.useState(false)
    const [search, setsearch] = React.useState(false)
    const [from, setfrom] = React.useState(false)
    const [searchvalue, setvalue] = React.useState('')
    const [loop, setloop] = React.useState(false)
    const ref= React.useRef()
    let userctc = useContext(userContext)
    const handleChange = (event) => {
        settype(false)
        userctc.setForm({
            ...userctc.form,
            [event.target.id]: event.target.value,
        });
    };
    const submit = () => {
        if (userctc.form.from == '' || userctc.form.paymentreason == '' || userctc.form.description == '' || userctc.form.currencytype == '') {
            settype(true);
        }
        else {
            cont(true)
        }
    }
    const values = ['INR',
        'ARS',
        'AWG',
        'AUD',
        'AZN',
        'BSD',
        'BBD',
        'BDT',
        'BYR',
        'BZD',
        'BMD',
        'BOB',
        'BAM',
        'BWP',
        'BGN',
        'BRL',
        'BND',
        'KHR',
        'CAD',
        'KYD',
        'CLP',
        'CNY',
        'COP',
        'CRC',
        'HRK',
        'CUP',
        'CZK',
        'DKK',
        'DOP',
        'XCD',
        'EGP',
        'SVC',
        'EEK',
        'EUR',
        'FKP',
        'FJD',
        'GHC',
        'GIP',
        'GTQ',
        'GGP',
        'GYD',
        'HNL',
        'HKD',
        'HUF',
        'ISK',
        'INR',
        'IDR',
        'IRR',
        'IMP',
        'ILS',
        'JMD',
        'JPY',
        'JEP',
        'KZT',
        'KPW',
        'KRW',
        'KGS',
        'LAK',
        'LVL',
        'LBP',
        'LRD',
        'LTL',
        'MKD',
        'MYR',
        'MUR',
        'MXN',
        'MNT',
        'MZN',
        'NAD',
        'NPR',
        'ANG',
        'NZD',
        'NIO',
        'NGN',
        'NOK',
        'OMR',
        'PKR',
        'PAB',
        'PYG',
        'PEN',
        'PHP',
        'PLN',
        'QAR',
        'RON',
        'RUB',
        'SHP',
        'SAR',
        'RSD',
        'SCR',
        'SGD',
        'SBD',
        'SOS',
        'ZAR',
        'LKR',
        'SEK',
        'CHF',
        'SRD',
        'SYP',
        'TWD',
        'THB',
        'TTD',
        'TRY',
        'TRL',
        'TVD',
        'UAH',
        'GBP',
        'USD',
        'UYU',
        'UZS',
        'VEF',
        'VND',
        'YER',
        'ZWD',]
    const paysearch = async (e) => {
        setvalue(e.target.value)
        let value = e.target.value
        try {
            const res = await Axios.get('http://192.168.3.208:3000/intelletUsers/?' + "searchItem=" + value + "&" + "accountNo=" + accoutno);
        } catch (error) {
            console.log(error);
        }
        userctc.setForm({
            ...userctc.form,
            [e.target.id]: e.target.value
        });
        if (e.target.value == '') {
            setsearch(false)
        }
        else {
            setsearch(true)
        }
    }
    function fromselect(e) {
        setfrom(false)
        ref.current.value=accoutno
        console.log(e.target.id);
        userctc.setForm({
            ...userctc.form,
            [e.target.id]: accoutno,
        });
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div onClick={() => setsearch(false)} className='w-9/12 flex flex-col items-center gap-6 border-r-2 mb-10 overflow-hidden'>
                    <FaMoneyCheckAlt className='w-20 h-20' />
                    <h1 className='antialiased text-2xl'>Pay someone</h1>
                    {/* <progress max={100} value={50} /> */}
                    <div className='flex'>
                        <TiTickOutline className='w-10 h-10 bg-violet-700 text-white rounded-full' /><hr className='border-violet-700 border-dashed border-2 w-48 mt-5' /><TiTickOutline className='w-10 h-10 rounded-full' />
                    </div>
                    <h1 className='antialiased'>You can pay someone in easy two steps</h1>
                    {/* input field */}
                    <div className='flex flex-col w-1/2 gap-8 justify-between'>
                        <div className='flex justify-between'>
                            <label className=''>Pay<span className='text-red-600'>&emsp;*</span></label>
                            <div className='flex'>
                                <input className='w-60 border-2 pl-2 py-1' onChange={(e) => paysearch(e)} id='pay' placeholder='Enter or choose credit amount'/>
                                <BiChevronRight className='border-2 h-9 w-6 cursor-pointer' onClick={() => setloop(!loop)} />
                                {/* dropdown */}
                                {search ? <div className={`absolute mt-9 h-40 w-60 border-2 border-gray-700 bg-white`}>
                                    <h1 className='border-2 w-full cursor-pointer hover:bg-violet-700 hover:text-white hover:rounded-md py-1' onClick={() => setsearch(false)}>{searchvalue}</h1>
                                </div> : null
                                }
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <label className=''>From<span className='text-red-600'>&emsp;*</span></label>
                            <div>
                                <input className='w-60 border-2 pl-2 py-1' id='from' onClick={() => setfrom(true)} onChange={handleChange} placeholder='Enter or choose debit amount' ref={ref}/>
                                {from ? <div className={`absolute overflow-hidden rounded mt-1 h-10 w-60 border-2 border-gray-700 bg-white`}>
                                    <h1 className='border-2 w-full cursor-pointer hover:bg-violet-700 hover:text-white hover:rounded-md py-1' id='from' onClick={fromselect}>{accoutno}</h1>
                                </div> : null
                                }
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <label className=''>Amount<span className='text-red-600'>&emsp;*</span></label>
                            <div>
                                <input className='w-60 border-2 pl-2 py-1' id='amount' onChange={handleChange} placeholder='Payment amount' />
                                <select name="cars" id="currencytype" className='border-2 h-9 w-14' onChange={handleChange}>
                                    {
                                        values.map((item, index) => (
                                            <option key={index} id='currencytype' value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <label>payment reason<span className='text-red-600'>&emsp;*</span></label>
                            <input className='w-60 border-2 pl-2 py-1' id='paymentreason' onChange={handleChange} placeholder='Choose Payment reason' />
                        </div>
                        <div className='flex justify-between'>
                            <label className=''>Description for benficiary</label>
                            <input className='w-60 border-2 pl-2 py-1  text-start' onChange={handleChange} id='description' placeholder='Enter description' />
                        </div>
                        {/* radio button */}
                        <div className='flex justify-between'>
                            <label className=''>Send advice to</label>
                            <div>
                                <input type="radio" id="age1" name="age" value="30" />
                                <label >Yes</label>
                                <input type="radio" id="age2" name="age" value="60" />
                                <label >No</label>
                            </div>
                        </div>
                        {/* tax */}
                        <div className='flex justify-between'>
                            <p>Withholding tax</p>
                            <section className='flex text-violet-500 cursor-pointer w-fit gap-1'>
                                <BsPlusCircle className='mt-1' />
                                <h1 className='font-semibold'>ADD WITHHOLDING TAX</h1>
                            </section>
                        </div>
                        {/* documents */}
                        <div className='flex justify-between'>
                            <p>Supporting documents</p>
                            <section className='flex text-violet-500 cursor-pointer w-fit gap-1'>
                                <BsPlusCircle className='mt-1' />
                                <h1 className='font-semibold'>ADD SUPPORTING DOCUMENTS</h1>
                            </section>
                        </div>
                    </div>
                    {/* footer */}
                    {type ? <span className='text-red-700 font-semibold'>Please enter appropriate credintials</span> : null}
                    <div className='flex gap-10'>
                        <button className='text-violet-800 hover:scale-105 duration-300' >Cancel</button>
                        <button className='border-violet-800 border-2 px-2 rounded text-violet-800 hover:scale-105 duration-300'>Save as draft</button>
                        <button className='w-20 h-10 bg-violet-800 text-white rounded-lg hover:scale-105 duration-300' onClick={submit}>Continue</button>
                    </div>
                </div>
                <div className='w-2/6'>
                    {loop ? <Template /> : <Recent />}
                </div>
            </div>
        </div>
    )
}
