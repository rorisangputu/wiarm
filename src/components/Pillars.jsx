import React from 'react'
import wheat from '../assets/wheat_hands.png'
const Pillars = () => {
  return (
    <div className='my-10 bg-[#a0d899] rounded-3xl px-5 py-5'>
        <div className=' '>
            <div className='flex flex-row items-center gap-3 my-2'>
                <h1 className='text-xl font-semibold'>Our Key Pillars</h1>
                <img src={wheat} alt=""  className='h-10 w-10'/>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-lg'>Building Power from the Soil Up</h2>
            </div>
        </div>
    </div>
  )
}

export default Pillars