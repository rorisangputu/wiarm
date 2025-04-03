import React from 'react'
import farmingWomen from '../assets/woman_farming.webp'
const AboutSection = () => {
  return (
    <div className='my-7'>
        <h1 className='font-semibold text-normal mb-5 text-gray-500'>About Us</h1>
        <div className='w-full flex flex-row gap-5'>
            <div className='w-1/2 flex'>
                <p className='text-xl font-light'>
                    WiARM (Women in Agriculture Rural Movement) is a collective of Black women dedicated to 
                    reclaiming land, food sovereignty, and economic independence through sustainable farming. 
                    Rooted in justice, empowerment, and collective action, we cultivate not just crops, but a 
                    future where Black women thrive in agriculture.
                </p>
                <button></button>
            </div>
            <div className='w-1/2'>
                <p>We plant, we fight, we rise!</p>
                <img src={farmingWomen} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default AboutSection