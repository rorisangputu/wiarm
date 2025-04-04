import React from 'react'
import farmingWomen from '../assets/woman_farming.webp'
import wheat_hands from '../assets/wheat.png'
const AboutSection = () => {
  return (
    <div className='my-7'>
        <h1 className='font-semibold text-normal mb-5 text-gray-500'>About Us</h1>
        <div className='w-full flex flex-row gap-5'>
            <div className='w-1/2 flex flex-col justify-between'>
                <p className='text-xl font-light w-full'>
                    WiARM (Women in Agriculture Rural Movement) is a collective of Black women dedicated to 
                    reclaiming land, food sovereignty, and economic independence through sustainable farming. 
                    Rooted in justice, empowerment, and collective action, we cultivate not just crops, but a 
                    future where Black women thrive in agriculture.
                </p>
                <p className='text-xl font-semibold uppercase'>We plant, we fight, we rise!</p>
                <button className="w-fit mt-6 px-6 py-3 bg-[#46973B] hover:bg-green-700 text-white font-semibold rounded-3xl transition duration-300">
                    Learn More 
                    
                </button>
            </div>
            <div className='w-1/2 flex flex-col gap-5 items-end'>
                
                <img src={farmingWomen} alt="" className='w-full h-[40vh] rounded-4xl object-cover' />
            </div>
        </div>
    </div>
  )
}

export default AboutSection