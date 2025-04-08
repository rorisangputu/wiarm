import React from 'react'
import wheat from '../assets/wheat_hands.png'
const Pillars = () => {
  return (
    <div className='my-10 bg-[#a0d899] rounded-3xl px-5 py-9'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col items-center my-4'>
          <h2 className='text-xl font-semibold'>Building Power from the Soil Up</h2>
          <p className='mt-3 px-10 text-center font-light text-lg'>
            At the heart of WiARM&apos;s work are the foundational pillars that guide our mission. 
            These pillars represent the core values and strategic focus areas that help us move toward liberation 
            through land, food, and community. They are more than goals—they are the roots of a movement built by 
            and for Black women in agriculture.
          </p>
        </div>
        <hr class="w-1/4 border-t border-gray-800 mx-auto" />
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='border'>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Reclaiming Land</h2>
              <p>
                Land is liberation. For too long, Black women have been excluded from owning and accessing fertile land 
                due to historical dispossession and ongoing systemic barriers. WiARM is actively working to change that 
                narrative. We fight for land justice by acquiring, protecting, and restoring land for Black women-led 
                farming initiatives. Through collective ownership and land stewardship, we are reclaiming our right to 
                work and live on the land with dignity.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Pillars