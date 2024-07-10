import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaCropSimple } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";

const Why = () =>{
    const data = [
        {
            title:"STRATEGY",
            buttets:[
                'Brand Strategy',
                'Content Strategy',
                'Digital Strategy',
                'Interactive Workshops',
                'Analytics and Research',
            ]
        },
        {
            title:"DESIGN",
            buttets:[
                'Creative Design',
                'Brand Guides',
                'Prototypes',
                'UI/UX & Web Design',
                'Visual Asset Creation',
            ]
        },
        {
            title:"DEVELOPMENT",
            buttets:[
                'System Architecture Design',
                'Full-Stack Development',
                'Mobile App Development',
                'Performance Optimization',
                'Continuous Deployment (CI/CD)',
            ]
        }
       
    ]

    return(
        <div className='font-work_sans px-40 sm:px-4  py-8 bg-gradient-to-br from-[#1C6D7E] to-[#0d4550]'>
            <div className='title flex flex-col text-[18px] justify-start items-center text-center'>
                <h1 className='text-[#e5e5e5] text-[16px]'>Let us tell you a bit</h1>
                <h1 className='font-semibold text-white'>Why we are the BEST in Business</h1>
            </div>
            <div className='content flex sm:flex-col flex-wrap gap-6 items-start sm:items-center justify-between py-12'>
                {
                    data.map((item, key)=>(
                        <div key={key} className={`flex sm:px-8 w-[30%] sm:w-full flex-col items-start sm:items-center justify-start gap-4 ${key==1? 'items-center sm:items-end': key==2? 'items-end sm:items-start':'items-start'}`}>
                            <h1 className={`font-bold sm:w-full text-white text-[18px] ${key==1 ? 'text-center sm:text-end': key==2?'text-end sm:text-start':'text-start'}`}>{item.title}</h1>
                            <div className={`flex flex-col items-start sm:w-full justify-start gap-2 ${key==1 ? 'items-center sm:items-end':key==2?'items-end sm:items-start':'items-start'}`}>
                                {
                                    item.buttets.map((bullet, id)=>(
                                        <p className='text-white/80' key={id}>{bullet}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
               

            </div>
        </div>

    )
}

export default Why;