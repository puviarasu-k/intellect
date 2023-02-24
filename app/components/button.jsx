'use client'
import React from 'react'
import Axios from 'axios'
export default function button({ item }) {
    const actionclick = async (item, status) => {
        const form = {
            ID: item.ID,
            statusCode: status,
            accountNo: item.accountNO,
            profileData: "checker",
        }
        const form2 = {
            statusCode: status,
            ID: item.ID,
            profileData: "checker"
        }
        try {
            const res = await Axios.post('http://localhost:4000/traceInsert', form);
            const res2 = await Axios.put('http://localhost:4000/statusUpdate', form2);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <button className="hover:scale-105 cursor-pointer text-white px-8 py-1 bg-red-700 rounded" onClick={() => actionclick(item, "IGNORE")}>Reject</button>
            <button className="hover:scale-105 cursor-pointer text-white px-8 py-1 bg-green-700 rounded" onClick={() => actionclick(item, "ACCEPT")}>Verify</button>
        </>
    )
}
