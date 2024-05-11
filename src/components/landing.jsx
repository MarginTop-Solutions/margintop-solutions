import React from 'react';
import { FaLinkedin,FaInstagramSquare , FaWhatsappSquare} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Landing = () =>{
    const date = new Date()

    return(
        <div
        // style={{
        //     backgroundColor: '#EEE7EC',
        //     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%2314A18C'/%3E%3Cstop offset='1' stop-color='%23EEE7EC'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%2381c4bc'/%3E%3Cstop offset='1' stop-color='%23EEE7EC'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(1720 0)'%3E%3Cg transform='translate(0 960)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-82.8 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.8' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        //     backgroundAttachment: 'fixed',
        //     backgroundSize: 'cover'
        // }}
         className='font-work_sans h-full overflow-y-hidden'>

            <svg className='absolute h-screen w-full z-[-10]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#EEE7EC' width='2000' height='1500'/><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop offset='0' stop-color='#14A18C'/><stop offset='1' stop-color='#EEE7EC'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop offset='0' stop-color='#81c4bc'/><stop offset='1' stop-color='#EEE7EC'/></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/><g id='g'><use href='#s' transform='scale(0.12) rotate(60)'/><use href='#s' transform='scale(0.2) rotate(10)'/><use href='#s' transform='scale(0.25) rotate(40)'/><use href='#s' transform='scale(0.3) rotate(-20)'/><use href='#s' transform='scale(0.4) rotate(-30)'/><use href='#s' transform='scale(0.5) rotate(20)'/><use href='#s' transform='scale(0.6) rotate(60)'/><use href='#s' transform='scale(0.7) rotate(10)'/><use href='#s' transform='scale(0.835) rotate(-40)'/><use href='#s' transform='scale(0.9) rotate(40)'/><use href='#s' transform='scale(1.05) rotate(25)'/><use href='#s' transform='scale(1.2) rotate(8)'/><use href='#s' transform='scale(1.333) rotate(-60)'/><use href='#s' transform='scale(1.45) rotate(-30)'/><use href='#s' transform='scale(1.6) rotate(10)'/></g></defs><g transform='translate(1720 0)'><g transform='translate(0 960)'><circle fill='url(#a)' r='3000'/><g opacity='0.5'><circle fill='url(#a)' r='2000'/><circle fill='url(#a)' r='1800'/><circle fill='url(#a)' r='1700'/><circle fill='url(#a)' r='1651'/><circle fill='url(#a)' r='1450'/><circle fill='url(#a)' r='1250'/><circle fill='url(#a)' r='1175'/><circle fill='url(#a)' r='900'/><circle fill='url(#a)' r='750'/><circle fill='url(#a)' r='500'/><circle fill='url(#a)' r='380'/><circle fill='url(#a)' r='250'/></g><g transform='rotate(-82.8 0 0)'><use href='#g' transform='rotate(10)'/><use href='#g' transform='rotate(120)'/><use href='#g' transform='rotate(240)'/></g><circle fill-opacity='0.8' fill='url(#a)' r='3000'/></g></g></svg>
            <div className='min-h-[100vh] px-40 sm:px-4 py-8 '>
                <div className='top h-[10vh]'>
                    <img src="/images/margintoplogo.png" className='h-[5vh] sm:h-[3vh]'/>
                </div>
                <div className='w-[55%] sm:w-full h-[60vh] gap-2 flex flex-col justify-center items-start '>
                    <h1 className='text-[64px]  font-medium tracking-tighter leading-[60px]'>ELEVATE YOUR BUSINESS WITH US</h1>
                    <p className='text-[#2D3031] pl-[4px]'>WE&apos;RE MAKING A SIGNIFICANT IMPACT BY ASSISTING NUMEROUS CLIENTS. IT&apos;S TRULY REWARDING.</p>
                </div>
            </div>
            <div className='footer bg-[#14A18C]  h-[30vh] w-full flex items-center justify-center shadow-lg '>
                <div className='px-40 sm:px-4 w-full py-8 flex sm:flex-col sm:items-start sm:justify-start items-center justify-between'>
                    <div className='left flex items-center justify-start gap-2'>
                        <h1>MarginTop Solutions</h1>
                        <p>&copy; {date.getFullYear()}</p>
                    </div>
                    <div className='right flex items-center justify-start gap-4'>
                        <div>Questions or Comments?</div>
                        <div className='flex items-center justify-start gap-2'>
                            <a target='_blank' href="https://www.linkedin.com/company/margintop-solutions" className='text-[20px] text-[#2D3031]'><IoLogoLinkedin/></a>
                            <a target='_blank' href="https://www.instagram.com/margintopsolutions/" className='text-[20px] text-[#2D3031]'><IoLogoInstagram/></a>
                            <a target='_blank' href="https://wa.me/+9779845926945?text=Hi%20!%20I%20got%20to%20know%20about%20MarginTop%20Solutions,%20I%20was%20thinking%20to%20work%20on%20a%20project!%20Can%20you%20help%20me%3F" className='text-[20px] text-[#2D3031]'><IoLogoWhatsapp/></a>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    )
}

export default Landing;