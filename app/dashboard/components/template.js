import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function Template({ loop, setloop }) {
    const [TotalCount, settotal] = React.useState()
    const values = [
        {
            pagenumber: 2,
            index: 0
        },
        {
            pagenumber: 4,
            index: 1
        },
        {
            pagenumber: 6,
            index: 2
        },
        {
            pagenumber: 8,
            index: 3
        }
    ]
    const [name, setname] = React.useState(true)
    const [last, setlast] = React.useState(true)
    const [namesort, setnamesort] = React.useState("ASC")
    const [data, setdata] = React.useState([])
    const [page, setpage] = React.useState(4)
    const [pageS, setpageSize] = React.useState(2)
    const [currentpage, setcurrentpage] = React.useState(0)
    const array = Array.from({ length: page }, (_, i) => i + 1)

    const ref = React.useRef()
    React.useEffect(() => {
        let sortItemBy = "userName"
        let sortBy = namesort
        let pageSize = pageS
        let searchItem = ""
        let accountNo = "9318c49d-e229-4533-81b3-4d09dea671d4"
        let totalOffset = pageSize * 0
        fetch('http://localhost:4000/orderchanges?' + "totalOffset=" + totalOffset + "&" + "sortItemBy=" + sortItemBy + "&" + "sortBy=" + sortBy + "&" + "pageSize=" + pageSize + "&" + "searchItem=" + searchItem + "&" + "accountNo=" + accountNo)
            .then((response) => response.json())
            .then((data) => {
                const value = data.TotalCount / pageS
                settotal(data.TotalCount)
                setpage(Math.round(value));
                setdata(data.Data)
            });
    }, [])

    const click = (item, type) => {
        let sortItemBy = "userName"
        let sortBy = namesort
        let pageSize = pageS
        let searchItem = ""
        let totalOffset = pageSize * currentpage
        let accountNo = "9318c49d-e229-4533-81b3-4d09dea671d4"
        if (type == "pageSize") {
            totalOffset = pageS * currentpage
            setpageSize(item)
            pageSize = item
            const value = TotalCount / item
            setpage(Math.round(value));
        }
        if (type == "sortBy" && item == "userName") {
            sortItemBy = item
            totalOffset = pageSize * currentpage
            sortBy = name ? "DESC" : "ASC"
            setnamesort(sortBy)
            setname(!name)
        }
        if (type == "sortBy" && item == "entryTime") {
            sortItemBy = item
            totalOffset = 0
            sortBy = last ? "DESC" : "ASC"
            setnamesort(sortBy)
            setlast(!last)
        }
        if (type == "pageno") {
            setcurrentpage(item)
            sortBy = namesort
            totalOffset = pageSize * item
        }
        if (type == "searchItem") {
            totalOffset = 0
            searchItem = item
        }
        fetch('http://localhost:4000/orderchanges?' + "totalOffset=" + totalOffset + "&" + "sortItemBy=" + sortItemBy + "&" + "sortBy=" + sortBy + "&" + "pageSize=" + pageSize + "&" + "searchItem=" + searchItem + "&" + "accountNo=" + accountNo)
            .then((response) => response.json())
            .then((data) => {
                settotal(data.TotalCount)
                setdata(data.Data)
            });
    }
    return (
        <div className={`top-0 bg-white h-screen overflow-y-auto fixed right-0 ${loop ? "translate-x-0 w-2/6 shadow-2xl shadow-violet-700/50 bg-blend-overlay" : "w-2/6 translate-x-full"} duration-700`}>
            <section className='p-6 gap-4'>
                <section className='flex justify-between'>
                    <h1>Choose an account to pay</h1>
                    <AiFillCloseCircle onClick={() => setloop(false)} className='w-6 h-6 cursor-pointer hover:bg-violet-700 hover:text-white rounded-full hover:scale-110' />
                </section><br />
                <input type="search" className='w-56 h-8 border-2 pl-2' onChange={(e) => click(e.target.value, "searchItem")} placeholder='Search accounts' />
            </section>
            <hr />
            <div className='flex justify-between p-2'>
                <h1 className='cursor-pointer' onClick={() => click("userName", "sortBy")} >Name {name ? <>↑</> : <>↓</>}</h1>
                <h1 className='cursor-pointer' onClick={() => click("entryTime", "sortBy")} >Last transaction {last ? <>↑</> : <>↓</>}</h1>
            </div>
            <hr />
            {
                data.map((item) => (
                    <div key={item} className='flex flex-col gap-3'>
                        <section className='flex justify-between'>
                            <section className='flex'>
                                <CiDeliveryTruck />
                                <span className='text-xs'>{item.userName}</span>
                            </section>
                            <section className='flex'>
                                <AiOutlineClockCircle />
                                <span className='text-xs'>{item.entryTime}</span>
                            </section>
                        </section>
                        <h1 className='ml-5 text-sm'>{item.IFSCcode}</h1>
                        <hr />
                    </div>
                ))
            }
            <section className='border-2 h-14 flex justify-around items-center'>
                <select id='currencytype' onChange={(e) => click(e.target.value, "pageSize")} className="w-20 h-10 rounded text-center p-1 border-2 border-violet-700">
                    {
                        values.map((item, index) => (
                            <option key={index} id='currencytype' className='w-20'>{item.pagenumber}</option>
                        ))
                    }
                </select>

                <nav>
                    <ul className="pagination total-link flex border-2">
                        {
                            array.map((item) => (
                                <li key={item} ref={ref} onClick={() => click(item - 1, "pageno")} className='cursor-pointer text-center rounded w-10 border-2 border-violet-700 hover:bg-violet-700 hover:text-white'>{item} </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
        </div>
    )
}
