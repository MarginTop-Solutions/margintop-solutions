import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () =>{
    const date = new Date()

    return(
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

    )
}

export default Footer;