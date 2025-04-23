import React from 'react'

const Pillars = () => {
  return (
    <div className='w-full py-12'>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-3'>
            <div className="flex items-center gap-4">
              <h1 className="uppercase font-medium tracking-[0.2em] text-green-800">
                Key Pillars
              </h1>
              <hr className="w-12 border-t-2 border-gray-200" />
            </div>
            <p className='text-slate-900'>
              At the heart of WiARM&apos;s work are the foundational pillars that
              guide our mission. These pillars represent the core values and strategic
              focus areas that help us move toward liberation through land, food, and
              community.
            </p>
          </div>
          <hr className="my-5 flex md:mx-auto w-[30%] border-t-2 border-gray-200" />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='flex flex-col gap-1 md:text-center'>
              <h1 className='font-normal text-green-800 text-md'>Reclaiming Land</h1>
              <p className='text-md font-light text-slate-900'>
                We fight for access to land and collective ownership for Black women.
                Land is more than property—it&apos;s identity, livelihood, and legacy.
                Reclaiming land means reclaiming power
              </p>
            </div>
            <div className='flex flex-col gap-1 md:text-center'>
              <h1 className='font-normal text-green-800 text-md'>Food Sovereignty</h1>
              <p className='text-md font-light text-slate-900'>
                We grow, harvest, and share food within our communities. Food sovereignty
                gives us the right to define our food systems and ensures that nourishment
                stays rooted in our hands.
              </p>
            </div>
            <div className='flex flex-col gap-1 md:text-center'>
              <h1 className='font-normal text-green-800 text-md'>Education & Advocacy</h1>
              <p className='text-md font-light text-slate-900'>
                We provide hands-on training in sustainable farming and lead policy work to break
                down systemic barriers. Through education and advocacy, we grow skills—and shift
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pillars