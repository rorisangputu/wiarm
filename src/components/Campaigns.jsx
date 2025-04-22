import React from 'react'
import dotted from '../assets/dotted_sa_bg.png'
import women from '../assets/two_women_farming.jpg'

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
                <div className='flex flex-col gap-5'>
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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='py-7 flex flex-col gap-7'>
                            <img src={women} alt="" className='w-full h-full object-cover' />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-3xl capitalize font-normal'>
                                    Seeds of Resistance
                                </h3>
                                <ul className='list-disc list-outside flex ml-5 gap-7 font-light'>
                                    <li>Eastern Cape, RSA</li>
                                    <li>March 20, 2025</li>
                                </ul>
                                <p className='line-clamp-2'>
                                    This campaign brings together women farmers to reclaim ancestral
                                    land for communal farming. Through seed exchanges, soil healing
                                    workshops, and community planting days, “Seeds of Resistance” is
                                    reviving indigenous farming methods and strengthening local food
                                    systems rooted in tradition and resilience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaigns