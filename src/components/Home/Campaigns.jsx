import React from 'react'
import dotted from '../assets/dotted_sa_bg.png'
import women from '../assets/two_women_farming.jpg'
import mulch from '../assets/mulch_farming.webp'
import sov from '../assets/sov_food.jpg'

const Campaigns = () => {
    return (
        <div className='w-full bg-green-900 py-10 relative overflow-hidden'>

            {/* Background Image Positioned Behind Content */}
            <img
                src={dotted}
                alt="wheatbg"
                className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
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
                            <img src={women} alt="" className='w-full h-84 rounded-3xl object-cover' />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-3xl capitalize font-normal'>
                                    Seeds of Resistance
                                </h3>
                                <ul className='list-disc marker:text-2xl list-outside flex ml-5 gap-7 text-lg font-light'>
                                    <li>Eastern Cape, RSA</li>
                                    <li>March 20, 2025</li>
                                </ul>
                                <p className='line-clamp-2 font-light text-lg'>
                                    This campaign brings together women farmers to reclaim ancestral
                                    land for communal farming. Through seed exchanges, soil healing
                                    workshops, and community planting days, “Seeds of Resistance” is
                                    reviving indigenous farming methods and strengthening local food
                                    systems rooted in tradition and resilience.
                                </p>
                            </div>
                            <div className="flex justify-start">
                                <button className="flex capitalize font-light text-md items-center gap-2 bg-[#232d25] rounded-lg py-3 px-4 text-white">
                                    View more
                                </button>
                            </div>
                        </div>
                        <div className='py-7 flex flex-col gap-7'>
                            <img src={sov} alt="" className='w-full h-84 rounded-3xl object-cover' />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-3xl capitalize font-normal'>
                                    Harvesting Dignity Mission
                                </h3>
                                <ul className='list-disc marker:text-2xl list-outside flex ml-5 gap-10 text-lg font-light'>
                                    <li>KwaZulu-Natal</li>
                                    <li>May 10, 2025</li>
                                </ul>
                                <p className='line-clamp-2 font-light text-lg'>
                                    Focused on building food sovereignty, this project supports local
                                    women-led cooperatives to grow, process, and distribute fresh
                                    produce within rural villages. The goal is to reduce food
                                    insecurity and challenge the exploitative middleman model by
                                    creating farm-to-table supply chains run by Black women.
                                </p>
                            </div>
                            <div className="flex justify-start">
                                <button className="flex capitalize font-light text-md items-center gap-2 bg-[#232d25] rounded-lg py-3 px-4 text-white">
                                    View more
                                </button>
                            </div>
                        </div>
                        <div className='py-7 flex flex-col gap-7'>
                            <img src={mulch} alt="" className='w-full h-84 rounded-3xl object-cover' />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-3xl capitalize font-normal'>
                                    Agri-Education for Liberation
                                </h3>
                                <ul className='list-disc marker:text-2xl list-outside flex ml-5 gap-10 text-lg font-light'>
                                    <li>Venda, Limpopo</li>
                                    <li>September, 2025</li>
                                </ul>
                                <p className='line-clamp-2 font-light text-lg'>
                                    This campaign trains young women in sustainable agriculture,
                                    land rights, and food justice. Through hands-on learning, policy
                                    education, and advocacy forums, WiARM is cultivating a generation
                                    of leaders ready to transform the agricultural landscape from the
                                    ground up.
                                </p>
                            </div>
                            <div className="flex justify-start">
                                <button className="flex capitalize font-light text-md items-center gap-2 bg-[#232d25] rounded-lg py-3 px-4 text-white">
                                    View more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaigns