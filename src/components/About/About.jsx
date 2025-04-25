import React from 'react'
import MissionValues from '../Home/MissionValues'

const About = () => {
  return (
    <div className='w-full py-10'>
      <div className='w-[90%] mx-auto'>
        <div>
          {/* About */}
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row items-center gap-3 '>
              <h1 className='uppercase tracking-[0.2em] text-green-900'>
                About Us
              </h1>
              <hr className='w-12 border-slate-400'/>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold text-green-900
                tracking-widest'>
                WiARM
              </h1>
              <p className='text-gray-900 pt-2'>
                <span className='text-green-900'>Women in Agriculture Rural Movement </span> 
                is a grassroots 
                collective of Black women committed to reclaiming land, 
                food systems, and power in our rural communities. Born 
                from shared struggles and deep-rooted resilience, WiARM 
                stands as a movement—not an organization—that centers 
                the lived experiences, skills, and leadership of women 
                in agriculture.
              </p>
              <p className='pt-2 text-gray-900'>
                We believe that agriculture is not just about growing 
                food—it's about restoring sovereignty, healing generational 
                wounds, and building systems that serve us. 
                From the soil to the seed, from advocacy to education, 
                our hands are on every part of the process.
              </p>
              <p className='pt-2 text-gray-900'>
                We are organizers. We are farmers. We are visionaries. 
                Together, we rise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About