import React from 'react'
import cab from './../assets/cab.jpg'
import mulch from '../assets/mulch_farming.webp'

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <img 
        src={mulch} 
        alt="Mulch" 
        className="absolute inset-0 w-full h-full object-cover opacity-40" 
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl font-bold md:text-5xl">Agriculture for Liberation</h1>
        <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Reclaiming land, food sovereignty, and our future. Join us in building a just and sustainable agricultural movement.
        </p>
    
        {/* Call to Action */}
        <button className="mt-6 px-6 py-3 bg-[#46973B] hover:bg-green-700 text-white font-semibold rounded-3xl transition duration-300">
          Join the Movement
        </button>
      </div>
    </div>
  )
}

export default Hero