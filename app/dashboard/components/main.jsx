'use client'
import React from 'react'
import Reviewpage from './reviewpage'
import Firstpage from './firstpage'
import userContext from "../../../Usercontext";

export default function main() {
    const [form, setForm] = React.useState({
        pay: '',
        from: '',
        amount: Number,
        paymentreason: '',
        description: '',
        currencytype: 'INR',
        ifsc: ''
    });
    const [cont, setcont] = React.useState(false)
    return (
        <userContext.Provider value={{ form, setForm }}>
            {cont ? <Reviewpage /> : <Firstpage cont={setcont} />}
        </userContext.Provider>
    )
}
