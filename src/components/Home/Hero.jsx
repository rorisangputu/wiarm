import React from 'react'
import mulch from '../../assets/mulch_farming.webp'
import HeroButton from '../HeroButton'


const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <img
        src={mulch}
        alt="Mulch"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="top-4 relative z-10 text-center px-6">
        <h1 className="text-4xl font-semibold md:text-5xl">Agriculture for Liberation</h1>
        <p className="mt-3 font-sans font-normal text-md md:text-xl max-w-2xl mx-auto">
          Reclaiming land, food sovereignty, and our future.
          Join us in building a just and sustainable agricultural movement.
        </p>

        <HeroButton styles={"font-sans mt-6 px-12 py-3 bg-green-800 hover:bg-green-900 text-white font-medium rounded-xl transition duration-300"}/>
      </div>
    </div>

  )
}

export default Hero