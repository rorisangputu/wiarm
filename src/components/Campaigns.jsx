import React from 'react'
import dotted from '../assets/dotted_sa_bg.png'

const Campaigns = () => {
    return (
        <div className='w-full bg-green-900 py-10 relative overflow-hidden'>

            {/* Background Image Positioned Behind Content */}
            <img
                src={dotted}
                alt="wheatbg"
                className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
            />
            <div className='w-[90%] mx-auto relative z-10 text-white'>
                <div className='flex flex-col'>
                    <div className="flex flex-col">
                        <div className='flex items-center gap-4 justify-center mb-2'>
                            <hr className="w-16 border-t-2 border-[#cecece]" />
                            <h1 className="uppercase font-normal tracking-[0.2em] text-white">
                                Our campaigns
                            </h1>
                            <hr className="w-16 border-t-2 border-[#cecece]" />
                        </div>
                        <div className='text-center flex flex-col gap-5'>
                            <h2 className='capitalize text-3xl text-white font-light'>
                                Some of our recent campaigns that helped touch lives
                            </h2>
                            <p className='font-extralight text-lg'>
                                These are our most recent campaigns
                            </p>
                            <div className="flex justify-center">
                                <button className="flex capitalize font-light text-md items-center gap-2 bg-[#232d25] rounded-lg py-3 px-4 text-white">
                                    View all campaigns
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaigns