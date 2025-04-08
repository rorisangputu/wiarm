import React from 'react'
import farmingWomen from '../assets/woman_farming.webp'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
const AboutSection = () => {
  return (
    <div className='my-10 h-[70vh] flex flex-col justify-center'>
        <h1 className='font-semibold text-lg mb-3 text-gray-500'>About Us</h1>
        <div className='w-full flex flex-row gap-5'>
            <div className='w-1/2 flex flex-col justify-between'>
                <p className='text-xl font-light w-full'>
                    WiARM (Women in Agriculture Rural Movement) is a collective of Black women dedicated to 
                    reclaiming land, food sovereignty, and economic independence through sustainable farming. 
                    Rooted in justice, empowerment, and collective action, we cultivate not just crops, but a 
                    future where Black women thrive in agriculture.
                </p>
                <p className='text-2xl font-extrabold uppercase'>We plant, we fight, we rise!</p>
                <div className='w-fit'>
                    <Link to={'/'} >
                        <div className="w-fit flex flex-row items-center gap-2 px-6 py-3 bg-[#46973B] hover:bg-green-700 text-white font-norma; rounded-3xl transition duration-300">
                            <p>Learn More</p>
                            <MdArrowOutward className='h-5 w-5' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 h-[50vh] flex flex-col gap-5 items-end'>
                <img src={farmingWomen} alt="" className='w-full h-full rounded-4xl object-cover' />
            </div>
        </div>
    </div>
  )
}

export default AboutSection