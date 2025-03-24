import React from 'react'
import cab from './../assets/cab.jpg'

const Hero = () => {
  return (
    <div className='w-full '>
        <div className='bg-[#3f5e1c] w-[70%]  mx-auto flex'>
            <div className='flex justify-center items-center p-10 w-1/2'>
                <h1 className='uppercase text-white font-bold text-4xl'>Welcome to family farm</h1>
            </div>
            <div className='w-1/2'>
                <img src={cab} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero