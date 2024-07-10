import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaCropSimple } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";

const Whyus = () =>{

    const data = [
        {
            logo:<FaCheck/>,
            title:'PointPressure &'
        },
        {
            logo:<FaCheck/>,
            title:'Nikkle &'
        },
        {
            logo:<FaCheck/>,
            title:'PatientCare &'
        },
        {
            logo:<FaCheck/>,
            title:'GDEX India'
        },
    ]


    return(
        <div className=' '>
            <div className='font-work_sans px-40 sm:px-4  py-8 bg-gradient-to-br from-[#1C6D7E] to-[#1C6D7E]'>
            <div className='title flex flex-col text-[18px] justify-start items-center text-center'>
                <h1 className='text-[#e5e5e5] text-[16px]'>Our Clients</h1>
                <h1 className='font-semibold text-white'>Connections built through Trust</h1>
            </div>
            <div className='content flex flex-wrap gap-6 py-2 items-start sm:items-center justify-center'>
                {
                    data.map((item, key)=>(
                        <div className='box h-[130px] w-[130px] gap-2 hover:cursor-pointer shadow-md hover:bg-[#1b6574] rounded-[5px] flex flex-col items-center justify-center p-2' key={key}>
                            <h1 className='text-[22px] text-[#1C6D7E] p-3 shadow-md rounded-full bg-white'>{item.logo}</h1>
                            <h1 className='font-medium text-[14px] text-white'>{item.title}</h1>
                        </div>
                    ))
                }

            </div>
        </div>


        </div>
        

    )
}

export default Whyus;