import React from 'react'
import land from '../assets/land.webp'
import wheat from '../assets/wheat bnw.png'
import book from '../assets/book.png'
import united_sov from '../assets/United-for-Food-Sovereignty.jpg'
import mulch from '../assets/mulch_farming.webp'
const Pillars = () => {
  return (
    <div className='my-10 min-h-[85vh] bg-[#dad7cd] rounded-3xl px-5 py-9'>
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
        <hr class="w-1/4 border-t border-white mx-auto" />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-4 px-5'>
          {/* Reclaiming Land */}
          <div className="rounded-2xl h-[450px] flex flex-col">
            <div className="h-[55%]">
              <img src={land} alt="" className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="flex flex-col justify-center h-[45%]  overflow-auto px-4 py-3">
              <h2 className="font-semibold text-lg mb-2">Reclaiming Land</h2>
              <p className="text-sm">
                We fight for access to land and collective ownership for Black women. Land is more than property—it&apos;s 
                identity, livelihood, and legacy. Reclaiming land means reclaiming power.
              </p>
            </div>
          </div>

          {/* Food Sovereignty */}
          <div className="rounded-2xl h-[450px] flex flex-col">
            <div className="flex flex-col items-center h-[45%] overflow-auto px-2 py-3">
              <img src={wheat} alt="" className='h-12 w-12'/>
              <h2 className='text-lg my-2 font-semibold'>Food Sovereignty</h2>
              <p className='text-sm text-center'>
                We grow, harvest, and share food within our communities. Food sovereignty gives us the right to 
                define our food systems and ensures that nourishment stays rooted in our hands.
              </p>
            </div>
            <div className="h-[55%]">
              <img src={united_sov} alt=""  className='w-full h-full object-cover rounded-2xl'/>
            </div>
          </div>

          {/* Food Sovereignty */}
          <div className="rounded-2xl h-[450px] flex flex-col">
            <div className="h-[55%]">
              <img src={mulch} alt=""  className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className="flex flex-col items-center h-[45%] overflow-auto px-2 py-3">
              <img src={book} alt="" className='h-7 w-7 mt-3'/>
              <h2 className='text-lg my-2 font-semibold'>Education & Advocacy</h2>
              <p className='text-sm text-center'>
                We provide hands-on training in sustainable farming and lead policy work to break down systemic 
                barriers. Through education and advocacy, we grow skills—and shift systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pillars