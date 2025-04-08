import React from 'react'
import crown from '../assets/GetInvolved.png'
const Involved = () => {
  return (
    <div className='relative w-full h-[50vh] flex items-center justify-center my-20 rounded-2xl'>

        <img src={crown} alt="" className='absolute inset-0 w-full h-full object-cover rounded-2xl' />
        
        {/* Content */}
      <div className="relative z-10 text-center px-6 text-[#344e41]">
        <h1 className="text-4xl font-bold md:text-6xl">Volunteer. Donate. Partner</h1>
        <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Reclaiming land, food sovereignty, and our future. Join us in building a just and sustainable agricultural movement.
        </p>

        
        <button className="mt-6 px-6 py-3 bg-[#46973B] hover:bg-green-700 text-white font-normal rounded-3xl transition duration-300">
          Take Action
        </button>
      </div>
    </div>
  )
}

export default Involved