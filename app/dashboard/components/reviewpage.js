import React from 'react'
import { MdRateReview } from 'react-icons/md'
import Popup from '../components/popup'
import { useContext } from "react";
import { BiErrorCircle } from 'react-icons/bi'
import userContext from "../../../Usercontext"
import Notify from '../components/notify'
import Axios from 'axios'
import { BsCheck2Circle } from 'react-icons/bs';

export default function Reviewpage() {
    const [review, setreview] = React.useState(false)
    const [count, setcount] = React.useState(false)
    const theme = useContext(userContext);
    let user = theme.form
    console.log(user);
    const accountno = typeof window !== 'undefined' ? localStorage.getItem("accountno") : null
    const role = typeof window !== 'undefined' ? localStorage.getItem("role") : null
    const submit = async () => {
        const form = {
            amount: user.amount,
            pay: user.pay,
            place: user.from,
            paymentReason: user.paymentreason,
            IFSCcode: user.ifsc,
            profileData: role,
            status: "PENDING",
            currencyType: user.currencytype,
            accountNo: accountno,
        }
        try {
            const res = await Axios.post('http://localhost:4000/UserDetailsRegistration', form);
            setreview(true)
        } catch (error) {
            setcount(true)
        }

    }
    return (
        <div className='flex flex-col items-center gap-5'>
            <MdRateReview className={`w-20 h-20 ${count ? "blur-sm" : ""}`} />
            <h1 className={`text-3xl ${count ? "blur-sm" : ""}`}>Review and confirm</h1>
            <div className={`flex ${count ? "blur-sm" : ""}`}>
                <BsCheck2Circle className='w-10 h-10 bg-green-500 text-white rounded-full' /><hr className='border-green-500 border-dashed border-2 w-48 mt-5' /><BsCheck2Circle className='w-10 h-10 bg-violet-700 text-white rounded-full' />
            </div>
            <p className={`text-sm ${count ? "blur-sm" : ""}`}>Please your details to make sure all the details are correct</p>
            <div className={`flex flex-col w-3/5 ${count ? "blur-sm" : ""}`}>
                <h1>accounttrster will recieve {user.amount} {user.currencytype} on 30-03-2020</h1>
                <hr className='border-1'></hr>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Execute from</h1>
                    <h1 className='w-20'>{user.pay}</h1>
                    <h1>{user.amount} {user.currencytype}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Charge by</h1>
                    <h1 className='w-32 ml-16'>Paid by company</h1>
                    <h1>113.75 {user.currencytype}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Payment reason</h1>
                    <h1 className='w-32'>{user.paymentreason}</h1>
                    <h1></h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Payment type</h1>
                    <h1 className='w-32'>SMART Same day</h1>
                    <h1></h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='w-48'>Purpose code</h1>
                    <h1 className='w-32'>DIVIDENDt</h1>
                    <h1></h1>
                </div>
                <hr className='border-1'></hr>
            </div>
            {
                count ? <Notify content="Checker cannot submit a payment" topic="Failure" Logo={<BiErrorCircle className='w-14 h-14 text-green-600' ></BiErrorCircle>} /> : null
            }
            <div className={`flex gap-8 ${count ? "blur-sm" : ""}`}>
                <button className='text-violet-800 hover:scale-105 duration-300'>CANCEL</button>
                <button className='border-violet-800 border-2 px-2 rounded text-violet-800 hover:scale-105 duration-300'>EDIT PAYMENT DETAILS</button>
                <button className='border-violet-800 border-2 px-2 rounded text-violet-800 hover:scale-105 duration-300'>SAVE AS DRAFT</button>
                <button className='px-2 h-10 bg-violet-800 text-white rounded-lg hover:scale-105 duration-300' onClick={submit}>SUBMIT</button>
            </div>
            {review ? <Popup review={setreview} /> : null}
        </div>

    )
}
