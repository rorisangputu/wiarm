import React from 'react'

const MissionValues = () => {
  return (
    <div className='w-full bg-green-900 py-10'>
      <div className='w-[90%] mx-auto'>
        
        <div className='flex flex-col'>
            <div className="flex items-center gap-4 justify-center mb-3">
                <hr className="w-12 border-t-2 border-gray-200" />
                <h1 className="uppercase font-medium tracking-[0.2em] text-white">
                    Mission & Values
                </h1>
                <hr className="w-12 border-t-2 border-gray-200" />
            </div>
            <div className='flex flex-col gap-5 md:flex-row'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-white text-lg font-medium'>Our Mission</h1>
                    <ul className="list-disc list-outside ml-5 text-white space-y-2">
                        <li>
                            To empower Black women in rural communities to 
                            own and work the land
                        </li>
                        <li>
                            To challenge the systems that exclude us from agriculture
                        </li>
                        <li>
                            To cultivate a future where our communities are 
                            fed, sustainable, and self-sufficient
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-white text-lg font-medium'>Our Values</h1>
                    <ul className="list-disc list-outside ml-5 text-white space-y-2">
                        <li>
                            To empower Black women in rural communities to 
                            own and work the land
                        </li>
                        <li>
                            To challenge the systems that exclude us from agriculture
                        </li>
                        <li>
                            To cultivate a future where our communities are 
                            fed, sustainable, and self-sufficient
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MissionValues
