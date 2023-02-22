import React from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { BsCheck2Circle, BsPlusCircle } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import Recent from '../components/recent'
import Template from '../components/template'
import { useContext } from "react";
import userContext from "../Usercontext";
import Axios from 'axios'

export default function Firstpage({ cont }) {
    const accoutno = typeof window !== 'undefined' ? localStorage.getItem("accountno") : null
    const [searchvalue, setvalue] = React.useState([])
    const payref = React.useRef()
    const fromref = React.useRef()
    const amountref = React.useRef()
    const ctref = React.useRef()
    const prref = React.useRef()
    const [loop, setloop] = React.useState(false)
    let userctc = useContext(userContext)
    const handleChange = async (event) => {
        if (event.target.id == "pay") {
            try {
                let value = event.target.value
                console.log("varuthu");
                const res = await Axios.get('http://localhost:4000/intelletUsers/?' + "searchItem=" + value + "&" + "accountNo=" + accoutno);
                setvalue(res.data.query)
            } catch (error) {
                console.log(error);
            }
        }
        userctc.setForm({
            ...userctc.form,
            [event.target.id]: event.target.value,
        });
    };
    const submit = (event) => {
        event.preventDefault();
        const IFSC = searchvalue.find(element => element.userName == userctc.form.pay);
        userctc.form.IFSC = IFSC?.accountNo
        cont(true)
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
    function filldata(item) {
        userctc.form.pay = item.pay
        userctc.form.from = item.place
        userctc.form.amount = item.amount
        userctc.form.paymentreason = item.paymentReason
        userctc.form.currencytype = item.currencyType
        userctc.form.IFSC = item.IFSCcode
        
        payref.current.value = item.pay
        fromref.current.value = item.place
        amountref.current.value = item.amount
        prref.current.value = item.paymentReason
        ctref.current.value = item.currencyType
    }

    return (
        <div className='flex justify-between'>
            <form className='w-9/12 flex flex-col items-center gap-6 border-r-2 mb-10 overflow-hidden' onSubmit={submit}>
                <FaMoneyCheckAlt className='w-20 h-20' />
                <h1 className='antialiased text-2xl'>Pay someone</h1>
                <div className='flex'>
                    <BsCheck2Circle className='w-10 h-10 bg-violet-700 text-white rounded-full' /><hr className='border-violet-700 border-dashed border-2 w-48 mt-5' /><BsCheck2Circle className='w-10 h-10 rounded-full' />
                </div>
                <h1 className='antialiased'>You can pay someone in easy two steps</h1>
                {/* input field */}
                <div className='flex flex-col w-1/2 gap-8 justify-between'>
                    <div className='flex justify-between'>
                        <label>Pay<span className='text-red-600'>&emsp;*</span></label>
                        <div className='flex'>
                            <input list='browsers' title='Choose credit amount' ref={payref} required className='w-60 border-2 pl-2 py-1' id='pay' onChange={handleChange} type="search" placeholder='Enter or choose credit amount' />
                            <datalist id="browsers">
                                {searchvalue.map((op) => <option key={op.accountNo}>{op.userName}</option>)}
                            </datalist>
                            <BiChevronRight className='border-2 h-9 w-6 cursor-pointer' onClick={() => setloop(!loop)} />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <label>From<span className='text-red-600'>&emsp;*</span></label>
                        <div>
                            <input className='w-60 border-2 pl-2 py-1' ref={fromref} required id='from' placeholder='Enter or choose debit amount' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <label>Amount<span className='text-red-600'>&emsp;*</span></label>
                        <div>
                            <input className='w-60 border-2 pl-2 py-1' ref={amountref} required id='amount' onChange={handleChange} placeholder='Payment amount' />
                            <select name="cars" id="currencytype" className='border-2 h-9 w-14' onChange={handleChange}>
                                {
                                    values.map((item, index) => (
                                        <option key={index} id='currencytype' ref={ctref} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <label>payment reason<span className='text-red-600'>&emsp;*</span></label>
                        <input className='w-60 border-2 pl-2 py-1' ref={prref} required id='paymentreason' onChange={handleChange} placeholder='Choose Payment reason' />
                    </div>
                    <div className='flex justify-between'>
                        <label>Description for benficiary</label>
                        <input className='w-60 border-2 pl-2 py-1  text-start' onChange={handleChange} id='description' placeholder='Enter description' />
                    </div>
                    {/* radio button */}
                    <div className='flex justify-between'>
                        <label>Send advice to</label>
                        <div className='flex gap-2'>
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
                <div className='flex gap-10'>
                    <button className='text-violet-800 hover:scale-105 duration-300' >Cancel</button>
                    <button className='border-violet-800 border-2 px-2 rounded text-violet-800 hover:scale-105 duration-300'>Save as draft</button>
                    <button className='w-20 h-10 bg-violet-800 text-white rounded-lg hover:scale-105 duration-300' type='submit'>Continue</button>
                </div>
            </form>
            <div className='w-2/6'>
                {loop ? <Template /> : <Recent fill={filldata} />}
            </div>
        </div>
    )
}
